import Loader from "@/components/shared/loader/Loader";
import { Article } from "@/pages/models/article.interface";
import AboutItem from "./about-item/AboutItem";
import style from "./About.module.css";

interface ArticlesProps {
  articles: Article[];
  loading: boolean;
}

const About: React.FC<ArticlesProps> = ({ articles, loading }) => {
  return (
    <>
      <div className={style.aboutContainer}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {articles.length &&
              articles.map((article) => (
                <AboutItem key={article?.id} article={article}></AboutItem>
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default About;
