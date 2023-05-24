import React, { useEffect, useState } from "react";
import Loader from "@/components/shared/loader/Loader";
import getHandicraft from "./api/handicraftApi";
import { AlbumItem } from "./models/albumItem.interface";
import Handicraft from "@/components/handicraft/Handicraft";

const HandicraftPage = () => {
  const [handicraftAlbum, setHandicraftAlbum] = useState<AlbumItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await getHandicraft(39);
      const data2 = await getHandicraft(48);
      let handicraft: AlbumItem[] = [];

      // console.log('data1', data1.albumItem.length, 'data2', data1.albumItem.length)
      // console.log('IF', data1.albumItem.length && data2.albumItem.length)

      if (data1.albumItem.length && data1.albumItem.length) {
        // console.log('handicraft', handicraft)
        handicraft = [...data1.albumItem, ...data1.albumItem];
      }

      // console.log('handicraft', handicraft)

      if (handicraft.length) {
        setHandicraftAlbum(handicraft);
        setLoading(false);
      }
    };

    if (typeof window !== "undefined") {
      fetchData();
    }
  }, []);

  return (
    <>
      {!loading ? (
        <Handicraft HandicraftAlbums={handicraftAlbum} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HandicraftPage;
