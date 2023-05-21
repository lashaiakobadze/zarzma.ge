import React, { useEffect, useState } from "react";
import { Article } from "./models/article.interface";
import getArticles from "./api/articlesApi";
import { DocType } from "./models/docType.enum";
import Publications from "@/components/publications/Publications";
import Loader from "@/components/shared/loader/Loader";

export default function FoundationPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(DocType.publication);
      setArticles(data);
    };
    fetchData();
  }, []);

  return <>{articles.length ? <Publications articles={articles} /> : <Loader />}</>;
}