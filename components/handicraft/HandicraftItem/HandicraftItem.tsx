import PageTitle from "@/components/shared/page-title/PageTitle";
import { Album } from "@/models/album.interface";
import { AlbumItem } from "@/models/albumItem.interface";
import Link from "next/link";
import styles from "./HandicraftItem.module.css";

const BASE_URL = process.env.dataUrl + "/";

interface HandicraftAlbumProps {
  album: Album;
  isMobile: boolean;
}

const HandicraftAlbum: React.FC<HandicraftAlbumProps> = ({
  album,
  isMobile,
}) => {
  return (
    <>
      <PageTitle isMobile={isMobile} title={album.name} center={true} />

      <div
        className={`${styles.handicraftContainer} ${
          isMobile ? styles.handicraftContainerMob : ""
        }`}
      >
        {album.albumItems.map((albumItem: AlbumItem) => (
          <div key={albumItem.id} className={styles.handicraft}>
            <Link
              href={`/handicraft/handicraftItem/${albumItem.id}`}
              legacyBehavior
            >
              <div className={styles.overlay}>
                <h3
                  className={`${styles.albumTitle} ${
                    isMobile ? styles.albumTitleMob : ""
                  }`}
                >
                  {albumItem.name}
                </h3>
              </div>
            </Link>

            <img
              className={`${styles.albumImg} ${
                isMobile ? styles.albumImgMob : ""
              }`}
              src={`${BASE_URL}${albumItem.albumPhotos[0]?.photoURL}`}
              alt={`handicraft ${albumItem.albumPhotos[0]?.name} ${albumItem.albumPhotos[0]?.id}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HandicraftAlbum;
