import PageTitle from "../shared/page-title/PageTitle";
import { VideoData } from "../../pages/models/video.interface";
import VideoPlayer from "./videoPlayer/VideoPlayer";
import style from "./Videos.module.css";
import useTranslation from "next-translate/useTranslation";

interface VideosProps {
  videos: VideoData[];
}

const getYoutubeId = (url: string) => {
  const match = url?.match(/(?:youtu.be\/|youtube.com\/watch\?v=)([\w-]+)/i);
  return match ? match[1] : "";
};

const Videos: React.FC<VideosProps> = ({ videos }) => {
  const { t } = useTranslation('common');

  return (
    <>
      {videos && (
        <div className={style.mainVideo}>
          <VideoPlayer
            videoId={getYoutubeId(videos[0]?.videoURL)}
            width="100%"
            height="578px"
          />
        </div>
      )}

      <PageTitle title={t('videos')} paddingLeft={118} />

      {videos && (
        <div className={style.videoItems}>
          {videos.slice(1, videos.length).map((video) => (
            <div key={video.id} className={style.videoItem}>
              <PageTitle title={video.name} paddingLeft={0} />
              <VideoPlayer
                key={video.id}
                videoId={getYoutubeId(video.videoURL)}
                width="100%"
                height="338px"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Videos;
