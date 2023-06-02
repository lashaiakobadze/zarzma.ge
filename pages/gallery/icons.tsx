import React, { useEffect, useState } from "react";
import getArticles from "../api/articlesApi";
import { Article } from "../models/article.interface";
import { DocType } from "../models/docType.enum";
import Icons from "@/components/icons/Icons";
import Loader from "@/components/shared/loader/Loader";
import useTranslation from "next-translate/useTranslation";
import { NextPage } from "next";

const IconsPage: NextPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const { lang } = useTranslation("common");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(DocType.icons, lang);
      setArticles(data);
    };
    fetchData();
  }, [lang]);

  return <>{articles.length ? <Icons articles={articles} /> : <Loader />}</>;
};

export default IconsPage;
