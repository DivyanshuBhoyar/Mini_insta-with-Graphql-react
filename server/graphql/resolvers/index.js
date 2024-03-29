const postsResolvers = require("./postsResolvers");
const usersResolvers = require("./usersResolvers");
const commentResolvers = require("./commentResolvers");

//exports from the resolvers package
module.exports = {
	//to reduce client side computation , count is calculated here ::optional
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length
  },
  //rsolvers for query of all types
  Query: {
    ...postsResolvers.Query,
  },
  //resolvers for mutation of all types
  Mutation: {
    ...postsResolvers.Mutation,
    ...usersResolvers.Mutation,
    ...commentResolvers.Mutation,
  },
};
