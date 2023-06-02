import Playlist from "@/components/playlist/Playlist";
import Loader from "@/components/shared/loader/Loader";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import getChants from "./api/chantsApi";
import { Chant } from "./models/chant.interface";

const ChantsPage: NextPage = () => {
  const [chants, setChants] = useState<Chant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getChants();
      setChants(data);
    };
    fetchData();
  }, []);

  return <>{chants.length ? <Playlist playlist={chants} /> : <Loader />}</>;
};

export default ChantsPage;
