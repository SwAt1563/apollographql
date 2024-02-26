// context.ts

import {TrackAPI} from "./datasources/track-api";

// ApolloServer<BaseContext>.cache: KeyValueCache<string>
import { KeyValueCache } from "@apollo/utils.keyvaluecache";
// ServerResponse<IncomingMessage>
import { ServerResponse, IncomingMessage } from "http";

export type DataSourceContext = {
  dataSources: {
    trackAPI: TrackAPI;
  };
};

export const createContext = ({
  req,
  res,
  cache,
}: {
  req: IncomingMessage;
  res: ServerResponse<IncomingMessage>;
  cache: KeyValueCache<string>;
}): DataSourceContext => {
  return { dataSources: { trackAPI: new TrackAPI({ cache }) } };
};
