import { Article } from "@/pages/models/article.interface";
import AboutItem from "./about-item/AboutItem";
import style from "./About.module.css";

interface ArticlesProps {
  articles: Article[];
}

const About: React.FC<ArticlesProps> = ({ articles }) => {
  console.log('articles', articles);
  return (
    <>
      <div className={style.about}>
        {articles.length &&
          articles.map((article) => (
            <AboutItem key={article?.id} article={article}></AboutItem>
          ))}
      </div>
    </>
  );
};

export default About;
