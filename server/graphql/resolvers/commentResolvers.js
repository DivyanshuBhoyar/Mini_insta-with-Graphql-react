const { AuthenticationError, UserInputError } = require("apollo-server");

const checkAuth = require("../../utils/check-auth");
const Post = require("../../models/Post");

module.exports = {
  Mutation: {
    async createComment(_, { postId, body }, context) {
      const { username } = checkAuth(context);
      if (body.trim() === "") {
        throw new UserInputError("Empty Comment", {
          errors: {
            body: "Comment body must not be empty",
          },
        });
      }
      const post = await Post.findById(postId);
      if (post) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });
        await post.save();
        return post;
      } else throw new UserInputError("Post not found");
    },

    async deleteComment(_, { postId, commentId }, context) {
      const { username } = checkAuth(context);

      const post = await Post.findById(postId);
      console.log(post);
      if (post) {
        const commentIndex = post.comments.findIndex((c) => c.id === commentId);
        if (post.comments[commentIndex].username === username) {
          post.comments.splice(commentIndex, 1);
          await post.save();
          return post;
        } else throw new AuthenticationError("ACTION FORBIDDEN");
      } else throw new UserInputError("Post not found");
    },
  },
};
