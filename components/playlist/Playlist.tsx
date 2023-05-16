import React from "react";
import AudioPlayer from "react-h5-audio-player";
import styles from "./Playlist.module.css";
import "react-h5-audio-player/lib/styles.css";
import PageTitle from "../shared/page-title/PageTitle";
import { Chant } from "@/pages/models/chant.interface";

interface PlaylistProps {
  playlist: Chant[];
}

const BASE_URL = process.env.dataUrl;

const Playlist: React.FC<PlaylistProps> = ({ playlist }) => {
  return (
    <>
      <PageTitle title={"საგალობლები"} paddingLeft={164} />

      <div className={styles.playlistContainer}>
        {playlist.map((chant) => (
          <div key={chant.id}>
            <div className={styles.playlist}>
              <div className={styles.titleRow}></div>
              <h3>{chant.chantName}</h3>
            </div>

            <AudioPlayer
              src={BASE_URL + chant.audioUrl}
              showJumpControls={false}
              showDownloadProgress={false}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Playlist;
