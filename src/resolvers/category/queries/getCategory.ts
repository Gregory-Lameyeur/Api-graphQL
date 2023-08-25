import Category from "../../../models/categoryModel";

const getCategory = async (_: any, { id }: any) => {
	try {
		const category = await Category.findById(id);
		if (!category) {
			throw new Error("CATEGORY_NOT_FOUND");
		}
		return category;
	} catch (error) {
		throw new Error(error);
	}
};

export default getCategory;
