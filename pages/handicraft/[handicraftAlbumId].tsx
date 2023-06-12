import CurrentAlbum from "@/components/albums/album/Album";
import HandicraftAlbum from "@/components/handicraft/HandicraftItem/HandicraftItem";
import Loader from "@/components/shared/loader/Loader";
import MobileContext from "@/contexts/MobileContext";
import getAlbums from "@/pages/api/albumsApi";
import { Album } from "@/models/album.interface";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";

const handicraftAlbumPage: NextPage = () => {
  const router = useRouter();
  const { handicraftAlbumId } = router.query;
  const { isMobile } = useContext(MobileContext);
  const [album, setAlbum] = useState<Album>();

  useEffect(() => {
    const fetchData = async () => {
      const data: { albums: Album[] } = await getAlbums();
      const foundAlbum = data?.albums.find(
        (album: Album) => album.id === +handicraftAlbumId!
      );
      setAlbum(foundAlbum);
    };

    if (!album && handicraftAlbumId) {
      fetchData();
    }
  }, [handicraftAlbumId, album]);

  return (
    <>
      {album ? (
        <HandicraftAlbum isMobile={isMobile} album={album} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default handicraftAlbumPage;
