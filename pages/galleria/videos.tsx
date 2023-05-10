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
  },
  {
    id: 4,
    name: "Video 4",
    videoURL: "https://www.youtube.com/watch?v=_z5kBq3wAA4",
    createDate: "2022-05-14T11:20:00Z"
  },
  {
    id: 5,
    name: "Video 5",
    videoURL: "https://www.youtube.com/watch?v=L0MK7qz13bU",
    createDate: "2022-05-15T09:00:00Z"
  },
  {
    id: 6,
    name: "Video 6",
    videoURL: "https://www.youtube.com/watch?v=jTBlM7lNJ1I",
    createDate: "2022-05-16T14:30:00Z"
  },
  {
    id: 7,
    name: "Video 7",
    videoURL: "https://www.youtube.com/watch?v=V7Q2xugQuzI",
    createDate: "2022-05-17T15:20:00Z"
  },
  {
    id: 8,
    name: "Video 8",
    videoURL: "https://www.youtube.com/watch?v=xjxtw8PjWGo",
    createDate: "2022-05-18T12:10:00Z"
  },
  {
    id: 9,
    name: "Video 9",
    videoURL: "https://www.youtube.com/watch?v=0RtO-tpGwJA",
    createDate: "2022-05-19T11:00:00Z"
  },
  {
    id: 10,
    name: "Video 10",
    videoURL: "https://www.youtube.com/watch?v=YZxH_EGTBfE",
    createDate: "2022-05-20T14:40:00Z"
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
