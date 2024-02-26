import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          tracksForHome: {
            keyArgs: false, // Prevent Apollo Client from automatically generating cache keys
            merge(existing = {}, incoming, { args }) {
              const { offset = 0, limit = 2 } = args || {};

              // Merge the paginated data manually
              const merged = {
                ...existing,
                tracks: [...(existing.tracks || []), ...incoming.tracks],
              };

              // Return the merged result
              return {
                ...merged,
                // Assuming you also want to keep other fields like totalTracks
                totalTracks: incoming.totalTracks,
              };
            },
          },
        },
      },
    },
  }),
});

export default client;

// import { InMemoryCache } from "@apollo/client";
// import { offsetLimitPagination } from "@apollo/client/utilities";

// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         tracksForHome: offsetLimitPagination() // use this when you return tracks directly without length of items
//       },
//     },
//   },
// });
