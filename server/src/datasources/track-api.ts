import { RESTDataSource } from "@apollo/datasource-rest";
import type { TrackModel, AuthorModel, ModuleModel } from "../models";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  async getTracksForHome(
    offset: number = 0,
    limit: number = 2
  ): Promise<{ totalTracks: number; tracks: TrackModel[] }>
  {
    const response = await this.get<TrackModel[]>("tracks");
    const totalTracks = response.length;
    const tracks = response.slice(offset, offset + limit);
    return {
      // we return the tracks and the totalTracks for pagination
      // we can't return the totalTracks in the tracks array, because it's not in the same type
      // so we return it in the same object
      totalTracks,
      tracks,
    };
  }

  async getAuthor(authorId: string): Promise<AuthorModel> {
    // encodeURIComponent is a method that encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character.
    // returns an AuthorModel object
    return this.get<AuthorModel>(`author/${encodeURIComponent(authorId)}`);
  }

  async getTrack(trackId: string): Promise<TrackModel> {
    // returns a TrackModel object
    return this.get<TrackModel>(`track/${encodeURIComponent(trackId)}`);
  }

  async getTrackModules(trackId: string): Promise<ModuleModel[]> {
    // returns a TrackModel object
    return this.get<ModuleModel[]>(
      `track/${encodeURIComponent(trackId)}/modules`
    );
  }

  async incrementTrackViews(trackId: string): Promise<TrackModel> {
    // returns a TrackModel object
    return this.patch<TrackModel>(
      `track/${encodeURIComponent(trackId)}/numberOfViews`
    );
  }
}
