import React, { useState } from "react";
import { useEffect } from "react";
import { NextPage } from "next";
import Videos from "@/components/videos/Videos";
import { VideoData } from "@/pages/models/video.interface";
import getVideos from "../api/videosApi";

const videosData: VideoData[] = [
  {
    id: 1,
    name: "Video 1",
    videoURL: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    createDate: "2022-05-11T12:30:00Z"
  },
  {
    id: 2,
    name: "Video 2",
    videoURL: "https://www.youtube.com/watch?v=TWfph3iNC-k",
    createDate: "2022-05-12T13:45:00Z"
  },
  {
    id: 3,
    name: "Video 3",
    videoURL: "https://www.youtube.com/watch?v=WIKqgE4BwAY",
    createDate: "2022-05-13T10:15:00Z"
  }
];



const VideosPage: NextPage = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // const data = await getVideos();
      setVideos(videosData);
    };
    fetchData();
  }, [])

  return <Videos videos={videos} />;
};

export default VideosPage;
