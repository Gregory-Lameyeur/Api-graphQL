import Post from "../../../models/postModel";

const getPost = async (_: any, { id }: any) => {
	try {
		const post = await Post.findById(id);
		if (!post) {
			throw new Error("POST_NOT_FOUND");
		}
		return post;
	} catch (error) {
		throw new Error(error);
	}
};

export default getPost;
