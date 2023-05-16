import Loader from "@/components/shared/loader/Loader";
import { Article } from "@/pages/models/article.interface";
import IconsItem from "./icons-item/IconsItem";
import style from "./Icons.module.css";

interface ArticlesProps {
  articles: Article[];
  loading: boolean;
}

const Icons: React.FC<ArticlesProps> = ({ articles, loading }) => {
  return (
    <>
      <div className={style.iconsContainer}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {articles.length &&
              articles.map((article) => (
                <IconsItem key={article?.id} article={article}></IconsItem>
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default Icons;
