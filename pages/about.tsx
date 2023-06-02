import React, { useEffect, useState } from "react";
import About from "@/components/about/About";
import { Article } from "./models/article.interface";
import getArticles from "./api/articlesApi";
import { DocType } from "./models/docType.enum";
import useTranslation from "next-translate/useTranslation";

export default function FoundationPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { lang } = useTranslation('common');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(DocType.eparchy, lang);
      setArticles(data);
      setLoading(false);
    };
    fetchData();
  }, [lang]);
  return <About articles={articles} loading={loading} />;
}
