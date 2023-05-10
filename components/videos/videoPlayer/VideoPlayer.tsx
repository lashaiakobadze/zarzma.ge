import React from "react";
import YouTube from "react-youtube";

type VideoPlayerProps = {
  videoId: string;
  width: string;
  height: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoId,
  width,
  height,
}) => {
  const opts = {
    width,
    height,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default VideoPlayer;
