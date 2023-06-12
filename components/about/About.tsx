import Loader from "@/components/shared/loader/Loader";
import { Article } from "@/models/article.interface";
import AboutItemMob from "./about-item-mob/AboutItemMob";
import AboutItem from "./about-item/AboutItem";
import style from "./About.module.css";

interface ArticlesProps {
  articles: Article[];
  loading: boolean;
  isMobile: boolean;
}

const About: React.FC<ArticlesProps> = ({ articles, loading, isMobile }) => {
  return (
    <>
      <div
        className={`${style.aboutContainer} ${
          isMobile ? style.aboutContainerMob : ""
        }`}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            {articles.length &&
              isMobile &&
              articles.map((article, index) => (
                <AboutItemMob
                  index={index}
                  key={article?.id}
                  article={article}
                ></AboutItemMob>
              ))}
            {articles.length &&
              !isMobile &&
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
