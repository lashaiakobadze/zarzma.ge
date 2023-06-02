import AlbumItem from "@/components/albums/album/albumItem/AlbumItem";
import Loader from "@/components/shared/loader/Loader";
import getAlbumItem from "@/pages/api/albumItemApi";
import * as Item from "@/pages/models/albumItem.interface";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const albumItemPage: NextPage = () => {
  const router = useRouter();
  const { albumItemId } = router.query;

  const [albumItem, setAlbumItem] = useState<Item.AlbumItem>();

  useEffect(() => {
    const fetchData = async (albumItemId: string) => {
      const albumItem: { albumItem: Item.AlbumItem[] } = await getAlbumItem(
        albumItemId
      );
      setAlbumItem(albumItem.albumItem[0]);
    };
    if (albumItemId) {
      fetchData("" + albumItemId);
    }
  }, [albumItemId]);

  return <>{albumItem ? <AlbumItem albumItem={albumItem!} /> : <Loader />}</>;
};

export default albumItemPage;
