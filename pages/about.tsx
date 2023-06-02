import React, { useEffect, useState } from "react";
import About from "@/components/about/About";
import { Article } from "./models/article.interface";
import getArticles from "./api/articlesApi";
import { DocType } from "./models/docType.enum";
import useTranslation from "next-translate/useTranslation";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { lang } = useTranslation("common");

  useEffect(() => {
    let isMounted = true;
    console.log(isMounted);

    const fetchData = async () => {
      const data = await getArticles(DocType.eparchy, lang);
      if (isMounted) {
        setArticles(data);
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);
  return <About articles={articles} loading={loading} />;
};

export default AboutPage;
