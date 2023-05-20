import { AlbumItem } from "./albumItem.interface";

export interface Album {
  id: number;
  name: string;
  albumType: number;
  createDate: string;
  albumItems: AlbumItem[];
}
