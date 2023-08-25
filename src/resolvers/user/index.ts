import createUser from "./mutations/createUser";
import updateUser from "./mutations/updateUser";
import login from "./mutations/login";
import deleteUser from "./mutations/deleteUser";
import getAllUsers from "./queries/getAllUsers";
import getUser from "./queries/getUser";

const userResolver = {
	Query: {
		getAllUsers,
		getUser,
	},
	Mutation: {
		createUser,
		login,
		deleteUser,
		updateUser,
	},
};

export default userResolver;
