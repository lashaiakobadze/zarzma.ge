import { Article } from "@/pages/models/article.interface";
import PageTitle from "../shared/page-title/PageTitle";
import SlickSlider from "../slickSlider/SlickSlider";
import About from "./about/About";
import style from "./Home.module.css";

const images = [
  "../slider_assets/slider1.png",
  "../slider_assets/slider2.png",
  "../slider_assets/slider3.png",
];

interface ArticlesProps {
  articles: Article[];
}

const Home: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <>
      <SlickSlider images={images} />

      <div className={style.aboutContainer}>
        <PageTitle title={"შესახებ"} paddingLeft={0} />

        <div className={style.aboutItems}>
          <About articles={[articles[0], articles[1]]} />
          <About articles={[articles[2], articles[3]]} />
        </div>
      </div>
    </>
  );
};

export default Home;
