import postResolver from "./post";
import userResolver from "./user";
import categoryResolver from "./category";

const resolvers = {
	Query: {
		...postResolver.Query,
		...userResolver.Query,
		...categoryResolver.Query,
	},
	Mutation: {
		...postResolver.Mutation,
		...userResolver.Mutation,
		...categoryResolver.Mutation,
	},
};

export default resolvers;
