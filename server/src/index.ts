import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// just for make seed data at the beginning

// import { addMocksToSchema } from "@graphql-tools/mock";
// import { makeExecutableSchema } from "@graphql-tools/schema";

// const { mocks } = require("./mocks");

// async function startApolloServer() {
//   const schema = addMocksToSchema({
//     schema: makeExecutableSchema({ typeDefs }),
//     mocks,
//   });
//   const server = new ApolloServer({ schema });

//   const { url } = await startStandaloneServer(server);

//   console.log(`🚀 Server ready at ${url}`);
// }

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { createContext } from "./context";

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => {
      const { cache } = server;
      return createContext({ req, res, cache });
    },
  });

  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer();
