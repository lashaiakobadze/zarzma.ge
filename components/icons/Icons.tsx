import { Article } from "@/models/article.interface";
import IconsItemMob from "./icons-item-mob/IconsItemMob";
import IconsItem from "./icons-item/IconsItem";
import style from "./Icons.module.css";

interface ArticlesProps {
  articles: Article[];
  isMobile: boolean;
}

const Icons: React.FC<ArticlesProps> = ({ articles, isMobile }) => {
  return (
    <>
      <div
        className={`${style.iconsContainer} ${
          isMobile ? style.iconsContainerMob : ""
        }`}
      >
        <>
          {articles.length &&
            isMobile &&
            articles.map((article, index) => (
              <IconsItemMob
                index={index}
                key={article?.id}
                article={article}
              ></IconsItemMob>
            ))}
          {articles.length &&
            !isMobile &&
            articles.map((article) => (
              <IconsItem key={article?.id} article={article}></IconsItem>
            ))}
        </>
      </div>
    </>
  );
};

export default Icons;
