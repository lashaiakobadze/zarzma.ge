import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { NextPage } from "next";
import Videos from "@/components/videos/Videos";
import { VideoData } from "@/pages/models/video.interface";
import getVideos from "../api/videosApi";
import Loader from "@/components/shared/loader/Loader";
import MobileContext from "@/contexts/MobileContext";

const VideosPage: NextPage = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const { isMobile } = useContext(MobileContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVideos();
      setVideos(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {videos.length ? (
        <Videos isMobile={isMobile} videos={videos} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default VideosPage;
