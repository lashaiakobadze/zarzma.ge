import React, { useEffect, useState } from "react";
import Loader from "@/components/shared/loader/Loader";
import Handicraft from "@/components/handicraft/Handicraft";
import { Album } from "./models/album.interface";
import getAlbums from "./api/albumsApi";
import { AlbumID } from "./models/albumID.enum";

const IncenseAlbumID = AlbumID.IncenseAlbumID;
const EnamelAlbumID = AlbumID.EnamelAlbumID;

const HandicraftPage = () => {
  const [incenseAlbum, setIncenseAlbum] = useState<Album>();
  const [enamelAlbum, setEnamelAlbum] = useState<Album>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data: { albums: Album[] } = await getAlbums();
      const foundIncenseAlbum = data?.albums.find(
        (album: Album) => album.id === +IncenseAlbumID!
      );
      setIncenseAlbum(foundIncenseAlbum);

      const foundEnamelAlbum = data?.albums.find(
        (album: Album) => album.id === +EnamelAlbumID!
      );
      setEnamelAlbum(foundEnamelAlbum);

      setLoading(false);
    };

    if (typeof window !== "undefined") {
      fetchData();
    }
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
