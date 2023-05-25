import Albums from "@/components/albums/Albums";
import React, { useEffect, useState } from "react";
import getAlbums from "../api/albumsApi";
import { Album } from "../models/album.interface";
import { AlbumType } from "../models/albumType.enum";

const AlbumsPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data: { albums: Album[] } = await getAlbums();

      let albums: Album[] = [];

      data?.albums.forEach((album: Album) => {
        if (album.albumType !== AlbumType.frescoes && album.albumType !== AlbumType.handicraft) {
          albums.push(album);
        }
      });

      console.log('album', albums)
      
      setAlbums(albums);
      setLoading(false);
    };
    fetchData();
  }, []);

  return <Albums albums={albums} loading={loading} />;
};

export default AlbumsPage;
