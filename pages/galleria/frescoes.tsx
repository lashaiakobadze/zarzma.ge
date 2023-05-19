import Frescoes from "@/components/frescos/Frescoes";
import React, { useEffect, useState } from "react";
import getFrescoes from "../api/frescoesApi";
import { AlbumItem } from "../models/albumItem.interface";

const FrescoesPage: React.FC = () => {
  const [frescoesAlbum, setFrescoesAlbum] = useState<AlbumItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFrescoes(39);
      setFrescoesAlbum(data.albumItem);
      setLoading(false);
    };
    fetchData();
  }, []);

  return <Frescoes frescoesAlbum={frescoesAlbum[0]} loading={loading} />;
};

export default FrescoesPage;
