import Category from "../../../models/categoryModel";

const createCategory = async (_: any, { name, description }: any) => {
	try {
		const existingCategory = await Category.findOne({ name });
		if (existingCategory) {
			throw new Error("CATEGORY_ALREADY_EXIST");
		}
		const newCategory = await Category.create({
			name,
			description,
		});

		return newCategory;
	} catch (err) {
		throw new Error(err);
	}
};

export default createCategory;
