import React, { useEffect, useState } from "react";
import { Article } from "./models/article.interface";
import getArticles from "./api/articlesApi";
import { DocType } from "./models/docType.enum";
import Publications from "@/components/publications/Publications";
import Loader from "@/components/shared/loader/Loader";
import useTranslation from "next-translate/useTranslation";

export default function FoundationPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const { lang } = useTranslation('common');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticles(DocType.publication, lang);
      setArticles(data);
    };
    fetchData();
  }, [lang]);

  return <>{articles.length ? <Publications articles={articles} /> : <Loader />}</>;
}