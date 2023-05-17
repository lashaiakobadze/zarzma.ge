import Frescoes from "@/components/frescos/Frescoes";
import React, { useEffect, useState } from "react";
import getFrescoes from "../api/frescoesApi";
import { Chant } from "../models/chant.interface";

const FrescoesPage: React.FC = () => {
  const [frescoes, setFrescoes] = useState<Chant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFrescoes();
      setFrescoes(data);
    };
    fetchData();
  }, []);

  return <Frescoes frescoes={[]} loading={false} />;
};

export default FrescoesPage;
