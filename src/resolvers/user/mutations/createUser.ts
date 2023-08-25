import User from "../../../models/userModel";
import { emailRegex, passwordRegex } from "../../../service/regex";
import * as bcryptjs from "bcryptjs";

const createUser = async (_: any, { name, email, password }: any) => {
	try {
		const existingEmail = await User.findOne({ email });
		if (existingEmail) {
			throw new Error("EMAIL_ALREADY_USED");
		}
		if (!emailRegex.test(email)) {
			throw new Error("INVALID_EMAIL_FORMAT");
		}
		if (!passwordRegex.test(password)) {
			throw new Error("INVALID_PASSWORD_FORMAT");
		}

		const salt = await bcryptjs.genSalt();
		const hashedPassword = await bcryptjs.hash(password, salt);

		const newUser = await User.create({
			name,
			email,
			password: hashedPassword,
		});
		return newUser;
	} catch (error) {
		throw new Error(error);
	}
};

export default createUser;
