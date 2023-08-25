import User from "../../../models/userModel";
import { emailRegex, passwordRegex } from "../../../service/regex";
import * as bcryptjs from "bcryptjs";

const updateUser = async (_: any, { userId, name, email, password }: any) => {
	try {
		const user = await User.findById(userId);
		if (!user) {
			throw new Error("USER_NOT_FOUND");
		}
		if (email && !emailRegex.test(email)) {
			throw new Error("INVALID_EMAIL_FORMAT");
		}
		if (password && !passwordRegex.test(password)) {
			throw new Error("INVALID_PASSWORD_FORMAT");
		}
		const updatedFields: any = {
			name,
			email,
			password,
		};
		if (password) {
			const salt = await bcryptjs.genSalt();
			const hashedPassword = await bcryptjs.hash(password, salt);
			updatedFields.password = hashedPassword;
		}

		const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, {
			new: true,
			runValidators: true,
		});
		return updatedUser;
	} catch (error) {
		throw new Error(error);
	}
};

export default updateUser;
