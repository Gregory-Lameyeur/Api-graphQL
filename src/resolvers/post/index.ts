import createPost from "./mutations/createPost";
import deletePost from "./mutations/deletePost";
import updatePost from "./mutations/updatePost";
import getAllAuthorPosts from "./queries/getAllAuthorPosts";
import getAllCategoriesPosts from "./queries/getAllCategoriesPosts";
import getPost from "./queries/getPost";
import getAllPosts from "./queries/getAllPosts";

const postResolver = {
	Query: {
		getAllAuthorPosts,
		getAllCategoriesPosts,
		getPost,
		getAllPosts,
	},
	Mutation: {
		createPost,
		deletePost,
		updatePost,
	},
};

export default postResolver;
