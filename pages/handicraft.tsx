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
      const data = await getHandicraft(39);
      setHandicraftAlbum(data.albumItem);
      setLoading(false);
    };

    if (typeof window !== "undefined") {
      fetchData();
    }
  }, []);

  return (
    <>
      {!loading ? <Handicraft HandicraftAlbums={handicraftAlbum} /> : <Loader />}
    </>
  );
};

export default HandicraftPage;
