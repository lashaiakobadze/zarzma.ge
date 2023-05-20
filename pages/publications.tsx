import React, { useEffect, useState } from "react";
import { Article } from "./models/article.interface";
import getArticles from "./api/articlesApi";
import { DocType } from "./models/docType.enum";
import Publications from "@/components/publications/Publications";

export default function FoundationPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(DocType.publication);
      setArticles(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return <Publications articles={articles} loading={loading} />;
}