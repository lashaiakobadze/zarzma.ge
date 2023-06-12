import { Article } from "@/models/article.interface";
import AboutItem from "./about-item/AboutItem";
import style from "./About.module.css";

interface ArticlesProps {
  articles: Article[];
  isMobile: boolean;
}

const About: React.FC<ArticlesProps> = ({ articles, isMobile }) => {
  return (
    <>
      <div className={`${style.about} ${isMobile ? style.aboutMob : ""}`}>
        {articles.length &&
          articles.map((article, index) => (
            <AboutItem index={index} isMobile={isMobile} key={article?.id} article={article}></AboutItem>
          ))}
      </div>
    </>
  );
};

export default About;
