import React, { useEffect, useState } from "react";
import getArticles from "../api/articlesApi";
import { Article } from "../models/article.interface";
import { DocType } from "../models/docType.enum";
import Icons from "@/components/icons/Icons";
import Loader from "@/components/shared/loader/Loader";

export default function FoundationPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(DocType.icons);
      setArticles(data);
    };
    fetchData();
  }, []);

  return <>{articles.length ? <Icons articles={articles} /> : <Loader />}</>;
}
