import Albums from "@/components/albums/Albums";
import React, { useEffect, useState } from "react";
import getAlbums from "../api/albumsApi";
import { Album } from "../models/album.interface";

const AlbumsPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data: {albums: Album[] } = await getAlbums();
      setAlbums(data.albums);
      setLoading(false);
    };
    fetchData();
  }, []);

  return <Albums Albums={albums} loading={loading} />;
};

export default AlbumsPage;
