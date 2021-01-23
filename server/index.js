require("dotenv").config();
const mongoose = require("mongoose");
const { ApolloServer, PubSub } = require("apollo-server");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

mongoose
  .connect(process.env.DB_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Atlas Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Apollo Server is up & running at ${res.url}`);
  });
