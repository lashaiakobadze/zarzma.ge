import React, { useEffect, useState } from "react";
import About from "@/components/about/About";
import { Article } from "./models/article.interface";
import getArticles from "./api/articlesApi";
import { DocType } from "./models/docType.enum";

export default function FoundationPage() {
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
  return <About articles={articles} loading={loading} />;
}
