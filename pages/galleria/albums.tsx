import Albums from "@/components/albums/Albums";
import React, { useEffect, useState } from "react";
import getAlbumPhotoURL from "../api/albumPhotoUrlApi";
import getAlbums from "../api/albumsApi";
import { Album } from "../models/album.interface";

const AlbumsPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data: {albums: Album[] } = await getAlbums();

      let albums = data?.albums.map((album: Album)=> {
        return album;
      });
      setAlbums(albums);
      setLoading(false);
    };
    fetchData();
  }, []);

  return <Albums albums={albums} loading={loading} />;
};

export default AlbumsPage;
