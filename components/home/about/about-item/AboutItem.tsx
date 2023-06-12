import PageTitle from "@/components/shared/page-title/PageTitle";
import { Article } from "@/models/article.interface";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "./AboutItem.module.css";

const BASE_URL = process.env.dataUrl;

interface ArticleProps {
  article: Article;
  isMobile: boolean;
  index: number;
}

const AboutItem: React.FC<ArticleProps> = ({ article, isMobile, index }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const { t } = useTranslation("common");
  const imgUrl = BASE_URL + article?.photoUrl;

  const showMore = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <>
      <div
        className={`${style.aboutItem} ${isMobile ? style.aboutItemMob : ""} ${
          isMobile ? (index % 2 === 0 ? style.even : style.odd) : ""
        }`}
      >
        {article?.photoUrl && BASE_URL && (
          <Image
            src={imgUrl}
            alt={article?.title}
            width={isMobile ? 175 : 202}
            height={isMobile ? 223 : 260}
          />
        )}

        <div
          className={`${style.aboutItemContent} ${
            isMobile ? style.aboutItemContentMob : ""
          }`}
        >
          {isMobile ? (
            <PageTitle
              isMobile={isMobile}
              title={article?.title}
              paddingLeft={0}
            />
          ) : (
            <h2>{article?.title}</h2>
          )}
          <p
            className={`${isShowMore ? "" : style.abbreviate}
            }`}
            dangerouslySetInnerHTML={{ __html: article?.text }}
          ></p>

          {isMobile ? (
            <button onClick={showMore}>
              {t(isShowMore ? "readLess" : "readMore")}
              <Image
                src="/main_assets/Vector-white.svg"
                alt="savane"
                width={8}
                height={10}
              />
            </button>
          ) : (
            <Link href={"/about"} legacyBehavior>
              <button>
                {t("readMore")}
                <Image
                  src="/main_assets/Vector.svg"
                  alt="savane"
                  width={8}
                  height={10}
                />
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutItem;
