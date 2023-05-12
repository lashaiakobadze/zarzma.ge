import { Article } from "@/pages/models/article.interface";
import Image from "next/image";
import Loader from "../shared/loader/Loader";
import PageTitle from "../shared/page-title/PageTitle";
import SlickSlider from "../slickSlider/SlickSlider";
import VideoPlayer from "../videos/videoPlayer/VideoPlayer";
import About from "./about/About";
import style from "./Home.module.css";

const images = [
  "../slider_assets/slider1.png",
  "../slider_assets/slider2.png",
  "../slider_assets/slider3.png",
];

const videos = [
  '',
  ''
]

interface ArticlesProps {
  articles: Article[];
  loading: boolean;
}

const Home: React.FC<ArticlesProps> = ({ articles, loading }) => {
  return (
    <>
      <SlickSlider images={images} />
      <PageTitle title={"შესახებ"} paddingLeft={111} />

      <div className={style.aboutContainer}>
        <div className={style.aboutItems}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <About articles={[articles[0], articles[1]]} />
              <About articles={[articles[2], articles[3]]} />
            </>
          )}
        </div>
      </div>

      <div className={style.icons}>
        <img
          src="/main_assets/png/home-icon-1.png"
          alt="home-icon-1"
          width="100%"
          height="534"
          loading="lazy"
          decoding="async"
        />
        <img
          src="/main_assets/png/home-icon-2.png"
          alt="home-icon-2"
          width="100%"
          height="534"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={style.videos}>
        <VideoPlayer
          key={videos[0]}
          videoId={videos[0]}
          width="100%"
          height="309px"
        />
        <VideoPlayer
          key={videos[0]}
          videoId={videos[0]}
          width="100%"
          height="309px"
        />
      </div>
    </>
  );
};

export default Home;
