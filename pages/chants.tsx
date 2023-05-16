import Playlist from "@/components/playlist/Playlist";
import React, { useEffect, useState } from "react";
import getChants from "./api/chantsApi";
import { Chant } from "./models/chant.interface";

const ChantsPage: React.FC = () => {
  const [chants, setChants] = useState<Chant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getChants();
      setChants(data);
    };
    fetchData();
  }, []);

  return <Playlist playlist={chants} />;
};

export default ChantsPage;
