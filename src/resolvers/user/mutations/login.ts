import User from "../../../models/userModel";
import * as bcryptjs from "bcryptjs";
import JWTService from "../../../service/JWTService";

const login = async (_: any, { email, password }: any) => {
	try {
		const user = await User.findOne({ email });
		if (!user) {
			throw new Error("EMAIL_NOT_FOUND");
		}
		const isPasswordValid = await bcryptjs.compare(password, user.password);
		if (!isPasswordValid) {
			throw new Error("INVALID_PASSWORD");
		}
		const token = JWTService.generate({
			userId: user._id,
			name: user.name,
			email: user.email,
		});
		return {
			userId: user._id,
			name: user.name,
			email: user.email,
			token,
			expiresIn: 365 * 24 * 60 * 60,
		};
	} catch (error) {
		throw new Error(error);
	}
};

export default login;
