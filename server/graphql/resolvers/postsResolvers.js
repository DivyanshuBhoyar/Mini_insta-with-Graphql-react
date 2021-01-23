const { AuthenticationError, UserInputError } = require("apollo-server");
const Post = require("../../models/Post");
const checkAuth = require("../../utils/check-auth");

module.exports = {
  //resolvers for mutation
  Mutation: {
    //various mutations as defined in typedefs related to Posts ; name of resolver function must be same
    async createPost(_, { body, objectURL }, context) {
      const user = checkAuth(context);
      if (body.trim === "") {
        throw new Error("Post Body must not be empty");
      }
      await objectURL;
      const newPost = new Post({
        body,
        objectURL,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });
      const post = await newPost.save();
      return newPost;
    },

    async deletePost(_, { postId }, context) {
      const user = checkAuth(context);

      try {
        const req_post = await Post.findById(postId);
        if (user.username === req_post.username) {
          await req_post.delete();
          return "Post successfully deleted";
        } else {
          throw new AuthenticationError("ACTION FORBIDDEN");
        }
      } catch (err) {
        throw new Error(err);
      }
    },

    async likePost(_, { postId }, context) {
      const { username } = checkAuth(context); //check username of authencticarted user

      const post = await Post.findById(postId);
      if (post) {
        if (post.likes.find((like) => like.username === username)) {
          //already liked
          post.likes = post.likes.filter((like) => like.username !== username);
        } else {
          //not liked
          post.likes.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }
        await post.save();
        return post;
      } else {
        throw new UserInputError("Post not found");
      }
    },
  },
  //resolvers for posts; name of res func same as in type defs

  Query: {
    async getPosts() {
      const posts = await Post.find();
      return posts;
    },

    async getPost(_, { postId }) {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error("Post not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
