import Category from "../../../models/categoryModel";

const updateCategory = async (_: any, { id, name, description, post }: any) => {
	try {
		const updateCategory = await Category.findByIdAndUpdate(
			id,
			{ name, description, post },
			{ new: true, runValidators: true }
		);

		if (!updateCategory) {
			throw new Error("CATEGORY_NOT_FOUND");
		}

		return updateCategory;
	} catch (err) {
		throw new Error(err);
	}
};

export default updateCategory;
