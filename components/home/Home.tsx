import { Article } from "@/models/article.interface";
import Link from "next/link";
import Loader from "../shared/loader/Loader";
import PageTitle from "../shared/page-title/PageTitle";
import SlickSlider from "../slickSlider/SlickSlider";
import VideoPlayer from "../videos/videoPlayer/VideoPlayer";
import About from "./about/About";
import style from "./Home.module.css";
import useTranslation from "next-translate/useTranslation";

const images = [
  "../slider_assets/slider1.webp",
  "../slider_assets/slider2.webp",
  "../slider_assets/slider3.webp",
];

const videos = [
  "https://www.youtube.com/watch?v=IT7y1wsz1Vs&ab_channel=ManjiTV",
  "https://www.youtube.com/watch?v=Xd6PpZxmaPU&ab_channel=2030Official",
];

interface ArticlesProps {
  articles: Article[];
  loading: boolean;
  isMobile: boolean;
}

const Home: React.FC<ArticlesProps> = ({ articles, loading, isMobile }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="main-slider">
        <SlickSlider images={images} isMobile={isMobile} />
      </div>

      <div className={`${isMobile ? style.homeMob : ""}`}>
        <PageTitle
          isMobile={isMobile}
          title={t("about")}
          paddingLeft={isMobile ? 50 : 111}
        />
      </div>

      <div
        className={`${style.aboutContainer} ${
          isMobile ? style.aboutContainerMob : ""
        }`}
      >
        <div
          className={`${style.aboutItems} ${
            isMobile ? style.aboutItemsMob : ""
          }`}
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              <About
                isMobile={isMobile}
                articles={[articles[0], articles[1]]}
              />
              <About
                isMobile={isMobile}
                articles={[articles[2], articles[3]]}
              />
            </>
          )}
        </div>
      </div>

      {isMobile ? (
        <>
          <Link
            href={"/gallery/frescoes"}
            legacyBehavior
            className={style.mural}
          >
            <div className={style.mural}>
              <img
                className={style.frescoesImgMob}
                src="/main_assets/png/mural-1.webp"
                alt="frescoes"
                height={265}
              />
              <img
                className={style.frescoesImgMob}
                src="/main_assets/png/mural-2.webp"
                alt="frescoes"
                height={265}
              />
            </div>
          </Link>
        </>
      ) : (
        <Link href={"/gallery/frescoes"} legacyBehavior className={style.mural}>
          <img
            className={style.frescoesImg}
            src="/main_assets/png/Mural-Images.png"
            alt="frescoes"
          />
        </Link>
      )}

      <div className={`${style.videos} ${isMobile ? style.videosMob : ""}`}>
        <VideoPlayer
          key={videos[0]}
          videoId={getYoutubeId(videos[0])}
          width="100%"
          height={isMobile ? "200px" : "400px"}
        />
        <VideoPlayer
          key={videos[1]}
          videoId={getYoutubeId(videos[1])}
          width="100%"
          height={isMobile ? "200px" : "400px"}
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
