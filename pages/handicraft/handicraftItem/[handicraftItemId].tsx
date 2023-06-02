import AlbumItem from "@/components/albums/album/albumItem/AlbumItem";
import Loader from "@/components/shared/loader/Loader";
import getAlbumItem from "@/pages/api/albumItemApi";
import * as Item from "@/pages/models/albumItem.interface";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const handicraftAlbumItemPage: NextPage = () => {
  const router = useRouter();
  const { handicraftItemId } = router.query;

  const [albumItem, setAlbumItem] = useState<Item.AlbumItem>();

  useEffect(() => {
    const fetchData = async (handicraftItemId: string) => {
      const albumItem: { albumItem: Item.AlbumItem[] } = await getAlbumItem(
        handicraftItemId
      );
      setAlbumItem(albumItem.albumItem[0]);
    };
    if (handicraftItemId) {
      fetchData("" + handicraftItemId);
    }
  }, [handicraftItemId]);

  return <>{albumItem ? <AlbumItem albumItem={albumItem!} /> : <Loader />}</>;
};

export default handicraftAlbumItemPage;
