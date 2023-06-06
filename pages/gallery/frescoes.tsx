import Frescoes from "@/components/frescos/Frescoes";
import MobileContext from "@/contexts/MobileContext";
import { NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";
import getFrescoes from "../api/frescoesApi";
import { AlbumID } from "../models/albumID.enum";
import { AlbumItem } from "../models/albumItem.interface";

const FrescoesAlbumItemID = AlbumID.FrescoesAlbumItemID;

const FrescoesPage: NextPage = () => {
  const [frescoesAlbum, setFrescoesAlbum] = useState<AlbumItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { isMobile } = useContext(MobileContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFrescoes(FrescoesAlbumItemID);
      setFrescoesAlbum(data.albumItem);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Frescoes
      isMobile={isMobile}
      frescoesAlbum={frescoesAlbum[0]}
      loading={loading}
    />
  );
};

export default FrescoesPage;
