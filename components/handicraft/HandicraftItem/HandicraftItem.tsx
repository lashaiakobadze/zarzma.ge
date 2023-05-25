import PageTitle from "@/components/shared/page-title/PageTitle";
import { Album } from "@/pages/models/album.interface";
import { AlbumItem } from "@/pages/models/albumItem.interface";
import Link from "next/link";
import styles from "./HandicraftItem.module.css";

const BASE_URL = process.env.dataUrl + "/";

interface HandicraftAlbumProps {
  album: Album;
}

const HandicraftAlbum: React.FC<HandicraftAlbumProps> = ({ album }) => {
  return (
    <>
      <PageTitle title={album.name} center={true} />

      <div className={styles.handicraftContainer}>
        {album.albumItems.map((albumItem: AlbumItem) => (
          <div key={albumItem.id} className={styles.handicraft}>
            <Link href={`/handicraft/handicraftItem/${albumItem.id}`} legacyBehavior>
              <div className={styles.overlay}>
                <h3 className={styles.albumTitle}>{albumItem.name}</h3>
              </div>
            </Link>

            <img
              className={styles.albumImg}
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
