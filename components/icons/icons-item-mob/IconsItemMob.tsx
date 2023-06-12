import PageTitle from "@/components/shared/page-title/PageTitle";
import { Article } from "@/models/article.interface";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useState } from "react";
import style from "./IconsItemMob.module.css";

const BASE_URL = process.env.dataUrl;

interface ArticleProps {
  article: Article;
  index: number;
}

const IconsItemMob: React.FC<ArticleProps> = ({ article, index }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const { t } = useTranslation("common");
  const imgUrl = BASE_URL + article?.photoUrl;

  const showMore = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <>
      <div
        className={`${style.iconsItemMob} ${index % 3 === 0 && style.first} ${
          index % 3 === 1 && style.second
        } ${index % 3 === 1 && style.third}`}
      >
        {article?.photoUrl && BASE_URL && (
          <Image src={imgUrl} alt={article?.title} width={163} height={210} />
        )}

        <div className={`${style.iconsItemContentMob}`}>
          <PageTitle isMobile={true} title={article?.title} paddingLeft={0} />
          <p
            className={`${isShowMore ? "" : style.abbreviate}
            }`}
            dangerouslySetInnerHTML={{ __html: article?.text }}
          ></p>

          <button onClick={showMore}>
            {t(isShowMore ? "readLess" : "readMore")}
          </button>
        </div>
      </div>
    </>
  );
};

export default IconsItemMob;
