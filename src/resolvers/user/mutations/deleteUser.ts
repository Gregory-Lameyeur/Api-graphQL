import User from "../../../models/userModel";

const deleteUser = async (_: any, { userId }: any) => {
	try {
		const deletedUser = await User.findByIdAndDelete(userId);
		if (!deletedUser) {
			throw new Error("USER_NOT_FOUND");
		}
		return {
			type: "SUCCESS",
			message: "USER_DELETED_SUCCESSFULLY",
		};
	} catch (error) {
		throw new Error(error);
	}
};

export default deleteUser;
