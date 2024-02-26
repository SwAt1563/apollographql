/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Author of a complete Track or a Module */
export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Scalars['String']['output']>;
};

export type IncrementTrackViewsResponse = {
  __typename?: 'IncrementTrackViewsResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  track?: Maybe<Track>;
};

/** A Module is a single unit of teaching. Multiple Modules compose a Track */
export type Module = {
  __typename?: 'Module';
  id: Scalars['ID']['output'];
  /** The Module's length in minutes */
  length?: Maybe<Scalars['Int']['output']>;
  /** The Module's title */
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  incrementTrackViews: IncrementTrackViewsResponse;
};


export type MutationIncrementTrackViewsArgs = {
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  track?: Maybe<Track>;
  tracksForHome?: Maybe<TracksPagination>;
};


export type QueryTrackArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTracksForHomeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** A track is a group of Modules that teaches about a specific topic */
export type Track = {
  __typename?: 'Track';
  author: Author;
  /** The track's complete description, can be in Markdown format */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  length?: Maybe<Scalars['Int']['output']>;
  /** The track's complete array of Modules */
  modules: Array<Module>;
  modulesCount?: Maybe<Scalars['Int']['output']>;
  /** The number of times a track has been viewed */
  numberOfViews?: Maybe<Scalars['Int']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type TracksPagination = {
  __typename?: 'TracksPagination';
  totalTracks: Scalars['Int']['output'];
  tracks?: Maybe<Array<Track>>;
};

export type IncrementTrackViewsMutationVariables = Exact<{
  incrementTrackViewsId: Scalars['ID']['input'];
}>;


export type IncrementTrackViewsMutation = { __typename?: 'Mutation', incrementTrackViews: { __typename?: 'IncrementTrackViewsResponse', code: number, success: boolean, message: string, track?: { __typename?: 'Track', id: string, numberOfViews?: number | null } | null } };

export type GetTrackQueryVariables = Exact<{
  trackId: Scalars['ID']['input'];
}>;


export type GetTrackQuery = { __typename?: 'Query', track?: { __typename?: 'Track', id: string, title: string, thumbnail?: string | null, length?: number | null, modulesCount?: number | null, numberOfViews?: number | null, description?: string | null, author: { __typename?: 'Author', id: string, name: string, photo?: string | null }, modules: Array<{ __typename?: 'Module', id: string, title: string, length?: number | null }> } | null };

export type GetTracksQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetTracksQuery = { __typename?: 'Query', tracksForHome?: { __typename?: 'TracksPagination', totalTracks: number, tracks?: Array<{ __typename?: 'Track', id: string, title: string, thumbnail?: string | null, length?: number | null, modulesCount?: number | null, author: { __typename?: 'Author', id: string, name: string, photo?: string | null } }> | null } | null };


export const IncrementTrackViewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"IncrementTrackViews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incrementTrackViewsId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"incrementTrackViews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incrementTrackViewsId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfViews"}}]}}]}}]}}]} as unknown as DocumentNode<IncrementTrackViewsMutation, IncrementTrackViewsMutationVariables>;
export const GetTrackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTrack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trackId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"track"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trackId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"modulesCount"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfViews"}},{"kind":"Field","name":{"kind":"Name","value":"modules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"length"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetTrackQuery, GetTrackQueryVariables>;
export const GetTracksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTracks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tracksForHome"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalTracks"}},{"kind":"Field","name":{"kind":"Name","value":"tracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"modulesCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetTracksQuery, GetTracksQueryVariables>;