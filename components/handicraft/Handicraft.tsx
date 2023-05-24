import { AlbumItem } from "@/pages/models/albumItem.interface";
import Link from "next/link";
import PageTitle from "../shared/page-title/PageTitle";
import styles from "./Handicraft.module.css";

const BASE_URL = process.env.dataUrl + '/';

interface HandicraftProps {
  HandicraftAlbums: AlbumItem[];
}

const Handicraft: React.FC<HandicraftProps> = ({ HandicraftAlbums }) => {
  console.log('HandicraftAlbums', HandicraftAlbums)
  return (
    <>
      <PageTitle title={"ხელსაქმე"} center={true} />

      <div className={styles.handicraftContainer}>
        {HandicraftAlbums.map((albumItem: AlbumItem) => (
          <div key={albumItem.id} className={styles.handicraft}>
            <Link
              href={`/galleria/albums/albumItem/${albumItem.id}`}
              legacyBehavior
            >
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

export default Handicraft;
