import Home from "@/components/home/Home";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import getArticles from "./api/articlesApi";
import { Article } from "./models/article.interface";
import { DocType } from "./models/docType.enum";

const HomePage: NextPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(DocType.eparchy);
      setArticles(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/main_assets/logo-zarzma.svg" />
      </Head>

      <Home articles={articles} loading={loading} />
    </>
  );
};

export default HomePage;
