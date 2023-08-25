import { gql } from "apollo-server";
export const typeDefs = gql`
	scalar DateTime
	type User {
		id: ID!
		name: String!
		email: String!
		password: String
		posts: [Post!]!
	}

	type Category {
		id: ID!
		name: String!
		description: String!
		post: [Post!]!
	}
	type Post {
		title: String!
		content: String!
		id: ID!
		category: Category!
		author: User!
		createdAt: DateTime!
	}

	type Query {
		getPost(id: ID!): Post!

		getAllAuthorPosts(authorId: ID!): [Post!]!

		getAllCategoriesPosts(category: String!): [Post!]!

		getAllCategories: [Category!]!

		getCategory(id: ID!): Category!

		getAllPosts: [Post!]!

		getAllUsers: [User!]!

		getUser(userId: ID!): User!
	}

	type Mutation {
		createPost(
			title: String!
			category: String!
			content: String!
			author: String!
		): Post!

		updatePost(
			postId: ID!
			title: String!
			category: String!
			content: String!
			author: String!
		): Post!

		deletePost(postId: ID!): Post!

		createUser(name: String!, email: String!, password: String!): User!

		login(email: String!, password: String!): User!

		updateUser(
			userId: ID!
			name: String!
			email: String!
			password: String!
		): User!

		deleteUser(userId: ID!): User!

		createCategory(name: String!, description: String!): Category!

		updateCategory(id: ID!, name: String!, description: String!): Category!

		deleteCategory(id: ID!): Category!
	}
`;

export default typeDefs;
