import Post from "../../../models/postModel";

const deletePost = async (_: any, { postId }: any) => {
	try {
		const deletedPost = await Post.findByIdAndDelete(postId);
		if (!deletedPost) {
			throw new Error("POST_NOT_FOUND");
		}
		return {
			type: "SUCCESS",
			message: "POST_DELETED_SUCCESSFULLY",
		};
	} catch (error) {
		throw new Error(error);
	}
};

export default deletePost;
