import User from "../../../models/userModel";

const getUser = async (_: any, { userId }: any) => {
	try {
		const users = await User.findById(userId);
		if (!users) {
			throw new Error("USER_NOT_FOUND");
		}
		return users;
	} catch (error) {
		throw new Error(error);
	}
};

export default getUser;
