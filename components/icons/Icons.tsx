import { Article } from "@/pages/models/article.interface";
import IconsItem from "./icons-item/IconsItem";
import style from "./Icons.module.css";

interface ArticlesProps {
  articles: Article[];
}

const Icons: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <>
      <div className={style.iconsContainer}>
        <>
          {articles.length &&
            articles.map((article) => (
              <IconsItem key={article?.id} article={article}></IconsItem>
            ))}
        </>
      </div>
    </>
  );
};

export default Icons;
