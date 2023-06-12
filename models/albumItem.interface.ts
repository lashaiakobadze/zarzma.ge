import { AlbumPhoto } from "./albumPhoto.interface";

export interface AlbumItem {
  id: number;
  albumId: number;
  name: string;
  createDate: string;
  defaultAlbum: number;
  albumPhotos: AlbumPhoto[];
}
