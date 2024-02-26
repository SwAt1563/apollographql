import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    tracksForHome: (_, { offset, limit }, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome(offset, limit);
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        };
      }
    },
  },

  // we did that beacuse the api return authorId, but we want to return all author data
  // so we more overide the author field
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      // we didn't make this call inside track, because the client maybe don't want to show the modules
      // so we make it in different resolver to make it optional
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};
