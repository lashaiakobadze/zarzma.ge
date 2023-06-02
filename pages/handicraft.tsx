import React, { useEffect, useState } from "react";
import Loader from "@/components/shared/loader/Loader";
import Handicraft from "@/components/handicraft/Handicraft";
import { Album } from "./models/album.interface";
import getAlbums from "./api/albumsApi";
import { AlbumID } from "./models/albumID.enum";
import { NextPage } from "next";

const IncenseAlbumID = AlbumID.IncenseAlbumID;
const EnamelAlbumID = AlbumID.EnamelAlbumID;

const HandicraftPage: NextPage = () => {
  const [incenseAlbum, setIncenseAlbum] = useState<Album>();
  const [enamelAlbum, setEnamelAlbum] = useState<Album>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const data: { albums: Album[] } = await getAlbums();
      const foundIncenseAlbum = data?.albums.find(
        (album: Album) => album.id === +IncenseAlbumID!
      );

      const foundEnamelAlbum = data?.albums.find(
        (album: Album) => album.id === +EnamelAlbumID!
      );
      if (isMounted) {
        setIncenseAlbum(foundIncenseAlbum);
        setEnamelAlbum(foundEnamelAlbum);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {!loading ? (
        <Handicraft incenseAlbum={incenseAlbum!} enamelAlbum={enamelAlbum!} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HandicraftPage;
