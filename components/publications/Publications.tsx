import { Article } from "@/models/article.interface";
import style from "./Publications.module.css";
import PublicationsItem from "./publications-item/PublicationsItem";
import PublicationsItemMob from "./publications-item-mob/PublicationsItemMob";

interface ArticlesProps {
  articles: Article[];
  isMobile: boolean;
}

const Publications: React.FC<ArticlesProps> = ({ articles, isMobile }) => {
  return (
    <>
      <div
        className={`${style.publicationsContainer} ${
          isMobile ? style.publicationsContainerMob : ""
        }`}
      >
        {articles.length &&
          isMobile &&
          articles.map((article, index) => (
            <PublicationsItemMob
              index={index}
              key={article?.id}
              article={article}
            ></PublicationsItemMob>
          ))}
        {articles.length &&
          !isMobile &&
          articles.map((article) => (
            <PublicationsItem
              key={article?.id}
              article={article}
            ></PublicationsItem>
          ))}
      </div>
    </>
  );
};

export default Publications;
