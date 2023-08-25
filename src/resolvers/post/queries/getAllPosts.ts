import Post from "../../../models/postModel";

const getAllPosts = async () => {
	try {
		const posts = await Post.find();
		if (!posts) {
			throw new Error("POSTS_NOT_FOUND");
		}
		return posts;
	} catch (error) {
		throw new Error(error);
	}
};

export default getAllPosts;
