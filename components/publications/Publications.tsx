import { Article } from "@/pages/models/article.interface";
import style from "./Publications.module.css";
import PublicationsItem from "./publications-item/PublicationsItem";

interface ArticlesProps {
  articles: Article[];
}

const Publications: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <>
      <div className={style.publicationsContainer}>
        <>
          {articles.length &&
            articles.map((article) => (
              <PublicationsItem
                key={article?.id}
                article={article}
              ></PublicationsItem>
            ))}
        </>
      </div>
    </>
  );
};

export default Publications;
