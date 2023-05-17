import { Article } from "@/pages/models/article.interface";
import Link from "next/link";
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
  "https://www.youtube.com/watch?v=IT7y1wsz1Vs&ab_channel=ManjiTV",
  "https://www.youtube.com/watch?v=Xd6PpZxmaPU&ab_channel=2030Official",
];

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

      <Link href={"/galleria/frescoes"} legacyBehavior>
        <img className={style.frescoesImg} src="/main_assets/png/Mural-Images.png" alt="frescoes"/>
      </Link>
      
      <div className={style.videos}>
        <VideoPlayer
          key={videos[0]}
          videoId={getYoutubeId(videos[0])}
          width="100%"
          height="309px"
        />
        <VideoPlayer
          key={videos[1]}
          videoId={getYoutubeId(videos[1])}
          width="100%"
          height="309px"
        />
      </div>
    </>
  );
};

const getYoutubeId = (url: string) => {
  const match = url?.match(/(?:youtu.be\/|youtube.com\/watch\?v=)([\w-]+)/i);
  return match ? match[1] : "";
};

export default Home;
