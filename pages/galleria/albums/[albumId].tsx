import CurrentAlbum from "@/components/albums/album/Album";
import getAlbums from "@/pages/api/albumsApi";
import { Album } from "@/pages/models/album.interface";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const albumPage = () => {
  const router = useRouter();
  const { albumId } = router.query;

  const [album, setAlbum] = useState<Album>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data: { albums: Album[] } = await getAlbums();

      let album = data?.albums.find((album: Album) => {
        return album.id === +albumId!;
      });
      setAlbum(album);
      console.log("album", album);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>{album && <CurrentAlbum album={album!} loading={loading} />}</>
  );
};

export default albumPage;
