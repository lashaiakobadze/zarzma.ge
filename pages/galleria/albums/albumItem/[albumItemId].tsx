import AlbumItem from "@/components/albums/album/albumItem/AlbumItem";
import getAlbumItem from "@/pages/api/albumItemApi";
import * as Item from "@/pages/models/albumItem.interface";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const albumItemPage = () => {
  const router = useRouter();
  const { albumItemId } = router.query;

  const [albumItem, setAlbumItem] = useState<Item.AlbumItem>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (albumItemId: string) => {
      const albumItem: { albumItem: Item.AlbumItem[] } = await getAlbumItem(albumItemId);
      setAlbumItem(albumItem.albumItem[0]);
      console.log('albumItem.albumItem[0]', albumItem.albumItem[0]);
      setLoading(false);
    };
    if (albumItemId) {
      console.log(albumItemId);
      fetchData("" + albumItemId);
    }
  }, []);

  return (
    <>{albumItem && <AlbumItem albumItem={albumItem!} loading={loading} />}</>
  );
};

export default albumItemPage;
