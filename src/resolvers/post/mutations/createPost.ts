import Post from "../../../models/postModel";
import User from "../../../models/userModel";
import Category from "../../../models/categoryModel";

const createPost = async (
	_: any,
	{ title, content, category, author }: any
) => {
	try {
		const existingCategory = await Category.findById(category);
		if (!existingCategory) {
			throw new Error("CATEGORY_NOT_FOUND");
		}

		const existingAuthor = await User.findById(author);
		if (!existingAuthor) {
			throw new Error("AUTHOR_NOT_FOUND");
		}
		const newPost = await Post.create({
			title,
			category,
			author,
			content,
		});
		return newPost;
	} catch (error) {
		throw new Error(error);
	}
};

export default createPost;
