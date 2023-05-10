import PageTitle from "../shared/page-title/PageTitle";
import { VideoData } from "../../pages/models/video.interface";
import VideoPlayer from "./videoPlayer/VideoPlayer";
import style from "./Videos.module.css";

interface VideosProps {
  videos: VideoData[];
}

const getYoutubeId = (url: string) => {
  const match = url?.match(/(?:youtu.be\/|youtube.com\/watch\?v=)([\w-]+)/i);
  return match ? match[1] : "";
};

const Videos: React.FC<VideosProps> = ({ videos }) => {
  return (
    <>
      {videos && (
        <VideoPlayer
          videoId={getYoutubeId(videos[0]?.videoURL)}
          width="100%"
          height="578px"
        />
      )}

      <PageTitle title={"ვიდეოები"} paddingLeft={118} />

      {videos && (
        <div className={style.videoItems}>
          {videos.map((video) => (
            <div className={style.videoItem}>
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
