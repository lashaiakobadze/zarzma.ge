import { Album } from "@/models/album.interface";
import Link from "next/link";
import PageTitle from "../shared/page-title/PageTitle";
import styles from "./Handicraft.module.css";
import useTranslation from "next-translate/useTranslation";

const BASE_URL = process.env.dataUrl + "/";

interface HandicraftProps {
  incenseAlbum: Album;
  enamelAlbum: Album;
  isMobile: boolean;
}

const Handicraft: React.FC<HandicraftProps> = ({
  incenseAlbum,
  enamelAlbum,
  isMobile,
}) => {
  const { t } = useTranslation("common");

  return (
    <>
      <PageTitle isMobile={isMobile} title={t("handicraft")} center={true} />

      <div
        className={`${styles.handicraftContainer} ${
          isMobile ? styles.handicraftContainerMob : ""
        }`}
      >
        <div className={styles.handicraft}>
          <Link href={`/handicraft/${incenseAlbum.id}`} legacyBehavior>
            <div className={styles.overlay}>
              <h3
                className={`${styles.albumTitle} ${
                  isMobile ? styles.albumTitleMob : ""
                }`}
              >
                {incenseAlbum.name}
              </h3>
            </div>
          </Link>

          <img
            className={`${styles.albumImg} ${
              isMobile ? styles.albumImgMob : ""
            }`}
            src={`${BASE_URL}${incenseAlbum.albumItems[0].albumPhotos[0]?.photoURL}`}
            alt={`handicraft ${incenseAlbum.albumItems[0].albumPhotos[0]?.name} ${incenseAlbum.albumItems[0].albumPhotos[0]?.id}`}
          />
        </div>

        <div className={styles.handicraft}>
          <Link href={`/handicraft/${enamelAlbum.id}`} legacyBehavior>
            <div className={styles.overlay}>
              <h3
                className={`${styles.albumTitle} ${
                  isMobile ? styles.albumTitleMob : ""
                }`}
              >
                {enamelAlbum.name}
              </h3>
            </div>
          </Link>

          <img
            className={`${styles.albumImg} ${
              isMobile ? styles.albumImgMob : ""
            }`}
            src={`${BASE_URL}${enamelAlbum.albumItems[0].albumPhotos[0]?.photoURL}`}
            alt={`handicraft ${enamelAlbum.albumItems[0].albumPhotos[0]?.name} ${enamelAlbum.albumItems[0].albumPhotos[0]?.id}`}
          />
        </div>
      </div>
    </>
  );
};

export default Handicraft;
