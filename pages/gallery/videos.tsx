import React, { useState } from "react";
import { useEffect } from "react";
import { NextPage } from "next";
import Videos from "@/components/videos/Videos";
import { VideoData } from "@/pages/models/video.interface";
import getVideos from "../api/videosApi";
import Loader from "@/components/shared/loader/Loader";

const VideosPage: NextPage = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVideos();
      setVideos(data);
    };
    fetchData();
  }, []);

  return <>{videos.length ? <Videos videos={videos} /> : <Loader />}</>;
};

export default VideosPage;
