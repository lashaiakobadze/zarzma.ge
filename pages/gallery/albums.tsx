import Albums from "@/components/albums/Albums";
import MobileContext from "@/contexts/MobileContext";
import { NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";
import getAlbums from "../api/albumsApi";
import { Album } from "../../models/album.interface";
import { AlbumType } from "../../models/albumType.enum";

const AlbumsPage: NextPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const { isMobile } = useContext(MobileContext);

  useEffect(() => {
    const fetchData = async () => {
      const data: { albums: Album[] } = await getAlbums();

      let albums: Album[] = [];

      data?.albums.forEach((album: Album) => {
        if (album.albumType !== AlbumType.frescoes && album.albumType !== AlbumType.handicraft) {
          albums.push(album);
        }
      });
      
      setAlbums(albums);
      setLoading(false);
    };
    fetchData();
  }, []);

  return <Albums isMobile={isMobile} albums={albums} loading={loading} />;
};

export default AlbumsPage;
