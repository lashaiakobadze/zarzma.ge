import PageTitle from "../shared/page-title/PageTitle";
import { VideoData } from "../../pages/models/video.interface";
import VideoPlayer from "./videoPlayer/VideoPlayer";
import style from "./Videos.module.css";
import useTranslation from "next-translate/useTranslation";

interface VideosProps {
  videos: VideoData[];
  isMobile: boolean;
}

const getYoutubeId = (url: string) => {
  const match = url?.match(/(?:youtu.be\/|youtube.com\/watch\?v=)([\w-]+)/i);
  return match ? match[1] : "";
};

const Videos: React.FC<VideosProps> = ({ videos, isMobile }) => {
  const { t } = useTranslation("common");

  return (
    <>
      {videos && (
        <div
          className={`${style.mainVideo} ${isMobile ? style.mainVideoMob : ""}`}
        >
          <VideoPlayer
            videoId={getYoutubeId(videos[0]?.videoURL)}
            width="100%"
            height={isMobile ? "465px" : "578px"}
          />
        </div>
      )}

      <PageTitle
        isMobile={isMobile}
        title={t("videos")}
        paddingLeft={isMobile ? 50 : 118}
      />

      {videos && (
        <div
          className={`${style.videoItems} ${
            isMobile ? style.videoItemsMob : ""
          }`}
        >
          {videos.slice(1, videos.length).map((video) => (
            <div key={video.id} className={`${style.videoItem} ${
              isMobile ? style.videoItemMob : ""
            }`}>
              <PageTitle
                isMobile={isMobile}
                title={video.name}
                paddingLeft={isMobile ? 20 : 0}
              />
              <VideoPlayer
                key={video.id}
                videoId={getYoutubeId(video.videoURL)}
                width="100%"
                height={isMobile ? "204px" : "338px"}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Videos;
