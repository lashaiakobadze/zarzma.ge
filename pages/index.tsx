import Home from "@/components/home/Home";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import getArticles from "./api/articlesApi";
import { Article } from "./models/article.interface";
import { DocType } from "./models/docType.enum";
import useTranslation from 'next-translate/useTranslation';

const HomePage: NextPage = () => {
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

  const { t, lang } = useTranslation('common');
  const title = t('title');

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="title"
          content="ზარზმის მამათა მონასტერი"
        />
        <meta
          name="description"
          content="ზარზმის მონასტერი მდებარეობს საქართველოში, სამცხე–ჯავახეთის რეგიონის ადიგენის მუნიციპალიტეტში, ისტორიულ მხარე სამცხეში, სოფელ ზარზმაში, მდინარე ქვაბლიანის ხეობაში. ზარზმის მონასტერი დაარსა, ადრინდელი ფეოდალური ხანის სასულიერო მოღვაწემ სერაპიონ ზარზმელმა, წარმოშობით კლარჯმა, რომლის ცხოვრებაც აღწერა მწერალმა და საეკლესიო მოღვაწემ ბასილ ზარზმელმა ცნობილ ჰაგიოგრაფიულ თხზულებაში ”ცხოვრებაჲ და მოქალაქეობაჲ ღმერთ - შემოსილისა და ნეტარისა მამისა ჩუენისაჲ სერაპიონისი”."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/main_assets/logo-zarzma.svg" />
      </Head>

      <Home articles={articles} loading={loading} />
    </>
  );
};

export default HomePage;
