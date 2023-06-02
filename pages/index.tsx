import Home from "@/components/home/Home";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import getArticles from "./api/articlesApi";
import { Article } from "./models/article.interface";
import { DocType } from "./models/docType.enum";
import useTranslation from 'next-translate/useTranslation';

const HomePage: NextPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, lang } = useTranslation('common');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(DocType.eparchy, lang);
      setArticles(data);
      setLoading(false);
    };
    fetchData();
  }, [lang]);
  

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta
          name="title"
          content={t('title')}
        />
        <meta
          name="description"
          content={t('description')}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/main_assets/logo-zarzma.svg" />
      </Head>

      <Home articles={articles} loading={loading} />
    </>
  );
};

export default HomePage;
