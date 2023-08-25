import Post from "../../../models/postModel";

const updatePost = async (
	_: any,
	{ postId, title, content, category }: any
) => {
	try {
		const post = await Post.findById(postId);
		if (!post) {
			throw new Error("POST_NOT_FOUND");
		}
		const updatedPost = await Post.findByIdAndUpdate(
			postId,
			{ title, content, category },
			{ new: true, runValidators: true }
		);
		return updatedPost;
	} catch (error) {
		throw new Error(error);
	}
};

export default updatePost;
