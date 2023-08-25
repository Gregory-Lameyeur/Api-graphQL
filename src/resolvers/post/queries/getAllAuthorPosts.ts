import Post from "../../../models/postModel";

const getAllAuthorPosts = async (_: any, { authorId }: any) => {
	try {
		const posts = await Post.find({ author: authorId });
		if (!posts) {
			throw new Error("POSTS_NOT_FOUND");
		}
		return posts;
	} catch (error) {
		throw new Error(error);
	}
};

export default getAllAuthorPosts;
