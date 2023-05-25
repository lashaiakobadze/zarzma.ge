import CurrentAlbum from "@/components/albums/album/Album";
import Loader from "@/components/shared/loader/Loader";
import getAlbums from "@/pages/api/albumsApi";
import { Album } from "@/pages/models/album.interface";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const albumPage = () => {
  const router = useRouter();
  const { albumId } = router.query;

  const [album, setAlbum] = useState<Album>();

  useEffect(() => {
    const fetchData = async () => {
      const data: { albums: Album[] } = await getAlbums();
      const foundAlbum = data?.albums.find(
        (album: Album) => album.id === +albumId!
      );
      setAlbum(foundAlbum);
    };

    if (!album && albumId) {
      fetchData();
    }
  }, [albumId, album]);

  return <>{album ? <CurrentAlbum album={album} /> : <Loader />}</>;
};

export default albumPage;
