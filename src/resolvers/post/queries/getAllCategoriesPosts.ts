import Post from "../../../models/postModel";

const getAllCategoriesPosts = async (_: any, { categoryId }: any) => {
	try {
		const posts = await Post.find({ category: categoryId });
		if (!posts) {
			throw new Error("POSTS_NOT_FOUND");
		}
		return posts;
	} catch (error) {
		throw new Error(error);
	}
};

export default getAllCategoriesPosts;
