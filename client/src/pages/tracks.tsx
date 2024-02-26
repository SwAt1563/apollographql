import React, { useEffect } from "react";
import { Layout } from "../components";
import { gql } from "../__generated__/";
import { useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";
import type { Track } from "../__generated__/graphql";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const TRACKS = gql(`
  query getTracks($offset: Int, $limit: Int) {
    tracksForHome (offset: $offset, limit: $limit){
      totalTracks
      tracks {
        id
        title
        author {
          id
          name
          photo
        }
        thumbnail
        length
        modulesCount
      }
    }
  }
`);
const Tracks = () => {
  const { loading, data, error, fetchMore } = useQuery(TRACKS, {
    variables: {
      offset: 0,
      limit: 2,
    },
  });

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        offset: data?.tracksForHome?.tracks?.length || 0,
        limit: 2,
      },
    });
  };

  // Check if there are more tracks to load
  const hasMoreTracks =
    data?.tracksForHome?.tracks?.length !== undefined &&
    data.tracksForHome.tracks.length < data.tracksForHome.totalTracks;

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.tracks?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
        {hasMoreTracks && <button onClick={handleLoadMore}>Load More</button>}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
