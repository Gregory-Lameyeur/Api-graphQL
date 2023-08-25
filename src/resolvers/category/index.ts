import getAllCategories from "./queries/getAllCategories";
import getCategory from "./queries/getCategory";
import createCategory from "./mutations/createCategory";
import deleteCategory from "./mutations/deleteCategory";
import updateCategory from "./mutations/updateCategory";

const categoryResolver = {
	Query: {
		getAllCategories,
		getCategory,
	},
	Mutation: {
		createCategory,
		updateCategory,
		deleteCategory,
	},
};

export default categoryResolver;
