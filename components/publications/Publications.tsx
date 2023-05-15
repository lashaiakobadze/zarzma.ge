import Loader from "@/components/shared/loader/Loader";
import { Article } from "@/pages/models/article.interface";
import style from "./Publications.module.css";
import PublicationsItem from "./publications-item/Publications";

interface ArticlesProps {
  articles: Article[];
  loading: boolean;
}

const Publications: React.FC<ArticlesProps> = ({ articles, loading }) => {
  return (
    <>
      <div className={style.publicationsContainer}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {articles.length &&
              articles.map((article) => (
                <PublicationsItem key={article?.id} article={article}></PublicationsItem>
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default Publications;
