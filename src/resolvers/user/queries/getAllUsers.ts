import User from "../../../models/userModel";

const getAllUsers = async () => {
	try {
		const users = await User.find();
		if (!users) {
			throw new Error("USERS_NOT_FOUND");
		}
		return users;
	} catch (error) {
		throw new Error(error);
	}
};

export default getAllUsers;
