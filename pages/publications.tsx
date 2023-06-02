import React, { useEffect, useState } from "react";
import { Article } from "./models/article.interface";
import getArticles from "./api/articlesApi";
import { DocType } from "./models/docType.enum";
import Publications from "@/components/publications/Publications";
import Loader from "@/components/shared/loader/Loader";
import useTranslation from "next-translate/useTranslation";
import { NextPage } from "next";

const PublicationPage: NextPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const { lang } = useTranslation("common");

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const data = await getArticles(DocType.publication, lang);
      if (isMounted) {
        setArticles(data);
      }
    };
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>{articles.length ? <Publications articles={articles} /> : <Loader />}</>
  );
}

export default PublicationPage;
