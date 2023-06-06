import Playlist from "@/components/playlist/Playlist";
import Loader from "@/components/shared/loader/Loader";
import MobileContext from "@/contexts/MobileContext";
import { NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";
import getChants from "./api/chantsApi";
import { Chant } from "./models/chant.interface";

const ChantsPage: NextPage = () => {
  const [chants, setChants] = useState<Chant[]>([]);
  const { isMobile } = useContext(MobileContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getChants();
      setChants(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {chants.length ? (
        <Playlist isMobile={isMobile} playlist={chants} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ChantsPage;
