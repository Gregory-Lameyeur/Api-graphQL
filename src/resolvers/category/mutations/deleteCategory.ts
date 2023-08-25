import Category from "../../../models/categoryModel";

const deleteCategory = async (_: any, { id }: any) => {
	try {
		const deletedCategory = await Category.findByIdAndDelete(id);
		if (!deletedCategory) {
			throw new Error("CATEGORY_NOT_FOUND");
		}

		return deletedCategory;
	} catch (error) {
		throw new Error(error);
	}
};

export default deleteCategory;
