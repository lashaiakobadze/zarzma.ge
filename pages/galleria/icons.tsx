import React, { useEffect, useState } from "react";
import getArticles from "../api/articlesApi";
import { Article } from "../models/article.interface";
import { DocType } from "../models/docType.enum";
import Icons from "@/components/icons/Icons";


export default function FoundationPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(DocType.icons);
      setArticles(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return <Icons articles={articles} loading={loading} />;
}