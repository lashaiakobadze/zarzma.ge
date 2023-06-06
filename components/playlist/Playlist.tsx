import React from "react";
import AudioPlayer from "react-h5-audio-player";
import styles from "./Playlist.module.css";
import "react-h5-audio-player/lib/styles.css";
import PageTitle from "../shared/page-title/PageTitle";
import { Chant } from "@/pages/models/chant.interface";
import useTranslation from "next-translate/useTranslation";

interface PlaylistProps {
  playlist: Chant[];
  isMobile: boolean;
}

const BASE_URL = process.env.dataUrl;

const Playlist: React.FC<PlaylistProps> = ({ playlist, isMobile }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={`${isMobile ? styles.chants : ''}`}>
        <PageTitle
          isMobile={isMobile}
          title={t("chants")}
          paddingLeft={isMobile ? 50 : 164}
        />

        <div
          className={`${styles.playlistContainer} ${
            isMobile ? styles.playlistContainerMob : ""
          }`}
        >
          {playlist.map((chant) => (
            <div key={chant.id}>
              <div
                className={`${styles.playlist} ${
                  isMobile ? styles.playlistMob : ""
                }`}
              >
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
      </div>
    </>
  );
};

export default Playlist;
