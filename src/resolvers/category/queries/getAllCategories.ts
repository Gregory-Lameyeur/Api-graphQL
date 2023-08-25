import Category from "../../../models/categoryModel";

const getAllCategories = async () => {
	try {
		const categories = await Category.find();
		if (!categories) {
			throw new Error("CATEGORIES_NOT_FOUND");
		}
		return categories;
	} catch (error) {
		throw new Error(error);
	}
};

export default getAllCategories;
