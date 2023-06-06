import PageTitle from "@/components/shared/page-title/PageTitle";
import { Article } from "@/pages/models/article.interface";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useState } from "react";
import style from "./AboutItemMob.module.css";

const BASE_URL = process.env.dataUrl;

interface ArticleProps {
  article: Article;
  index: number;
}

const AboutItemMob: React.FC<ArticleProps> = ({ article, index }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const { t } = useTranslation("common");
  const imgUrl = BASE_URL + article?.photoUrl;

  const showMore = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <>
      <div
        className={`${style.aboutItemMob} ${
          index % 2 === 0 ? style.even : style.odd
        }`}
      >
        {article?.photoUrl && BASE_URL && (
          <Image src={imgUrl} alt={article?.title} width={163} height={210} />
        )}

        <div className={`${style.aboutItemMobContentMob}`}>
          <PageTitle isMobile={true} title={article?.title} paddingLeft={0} />
          <p
            className={`${isShowMore ? "" : style.abbreviate}
            }`}
            dangerouslySetInnerHTML={{ __html: article?.text }}
          ></p>

          <button onClick={showMore}>
            {t(isShowMore ? "readLess" : "readMore")}
            <Image
              src="/main_assets/Vector-white.svg"
              alt="savane"
              width={8}
              height={10}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutItemMob;
