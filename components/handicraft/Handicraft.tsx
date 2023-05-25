import { Album } from "@/pages/models/album.interface";
import Link from "next/link";
import PageTitle from "../shared/page-title/PageTitle";
import styles from "./Handicraft.module.css";

const BASE_URL = process.env.dataUrl + "/";

interface HandicraftProps {
  incenseAlbum: Album;
  enamelAlbum: Album;
}

const Handicraft: React.FC<HandicraftProps> = ({
  incenseAlbum,
  enamelAlbum,
}) => {
  return (
    <>
      <PageTitle title={"ხელსაქმე"} center={true} />

      <div className={styles.handicraftContainer}>
        <div className={styles.handicraft}>
          <Link href={`/handicraft/${incenseAlbum.id}`} legacyBehavior>
            <div className={styles.overlay}>
              <h3 className={styles.albumTitle}>{incenseAlbum.name}</h3>
            </div>
          </Link>

          <img
            className={styles.albumImg}
            src={`${BASE_URL}${incenseAlbum.albumItems[0].albumPhotos[0]?.photoURL}`}
            alt={`handicraft ${incenseAlbum.albumItems[0].albumPhotos[0]?.name} ${incenseAlbum.albumItems[0].albumPhotos[0]?.id}`}
          />
        </div>

        <div className={styles.handicraft}>
          <Link href={`/handicraft/${enamelAlbum.id}`} legacyBehavior>
            <div className={styles.overlay}>
              <h3 className={styles.albumTitle}>{enamelAlbum.name}</h3>
            </div>
          </Link>

          <img
            className={styles.albumImg}
            src={`${BASE_URL}${enamelAlbum.albumItems[0].albumPhotos[0]?.photoURL}`}
            alt={`handicraft ${enamelAlbum.albumItems[0].albumPhotos[0]?.name} ${enamelAlbum.albumItems[0].albumPhotos[0]?.id}`}
          />
        </div>
      </div>
    </>
  );
};

export default Handicraft;
