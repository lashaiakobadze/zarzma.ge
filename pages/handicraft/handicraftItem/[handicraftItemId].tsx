import AlbumItem from "@/components/albums/album/albumItem/AlbumItem";
import Loader from "@/components/shared/loader/Loader";
import MobileContext from "@/contexts/MobileContext";
import getAlbumItem from "@/pages/api/albumItemApi";
import * as Item from "@/pages/models/albumItem.interface";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";

const handicraftAlbumItemPage: NextPage = () => {
  const router = useRouter();
  const { handicraftItemId } = router.query;
  const { isMobile } = useContext(MobileContext);
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

  return (
    <>
      {albumItem ? (
        <AlbumItem isMobile={isMobile} albumItem={albumItem!} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default handicraftAlbumItemPage;
