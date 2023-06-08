import PageTitle from "@/components/shared/page-title/PageTitle";
import * as Item from "@/pages/models/albumItem.interface";
import { AlbumPhoto } from "@/pages/models/albumPhoto.interface";
import style from "./AlbumItem.module.css";
import AlbumItemSlider from "./albumItemSlider/AlbumItemSlider";

const BASE_URL = process.env.dataUrl + "/";

interface AlbumItemProps {
  albumItem: Item.AlbumItem;
  isMobile: boolean;
}

const AlbumItem: React.FC<AlbumItemProps> = ({ albumItem, isMobile }) => {
  return (
    <>
      <div className={style.albumItem}>
        {!isMobile ? (
          <div className={style.albumItemSlider}>
            <div className="albums-slider album-item-slider">
              <AlbumItemSlider baseUrl={BASE_URL} albumItem={albumItem} />
            </div>
          </div>
        ) : (
          <div className={style.albumPhotos}>
            <div className={style.albumItemTitle}>
              <PageTitle
                isMobile={isMobile}
                title={albumItem.name}
                paddingLeft={50}
              />
            </div>
            {albumItem.albumPhotos.map((albumPhoto: AlbumPhoto) => (
              <img
                key={albumItem.id}
                className={style.albumPhoto}
                src={`${BASE_URL}${albumPhoto?.photoURL}`}
                alt={`${albumPhoto?.name} ${albumPhoto?.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AlbumItem;
