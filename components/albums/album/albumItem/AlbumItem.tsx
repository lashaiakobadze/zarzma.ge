import * as Item from "@/pages/models/albumItem.interface";
import style from "./AlbumItem.module.css";
import SlickSlider from "@/components/slickSlider/SlickSlider";
import AlbumItemSlider from "./albumItemSlider/AlbumItemSlider";

const BASE_URL = process.env.dataUrl + "/";

interface AlbumItemProps {
  albumItem: Item.AlbumItem;
}

const AlbumItem: React.FC<AlbumItemProps> = ({ albumItem }) => {
  return (
    <>
      <div className={style.albumItem}>
        <div className="main-slider album-item-slider">
          {/* {loading ? (
            <Loader />
          ) : (
            <SlickSlider
              images={albumItem.albumItems.map(
                (albumItem) => BASE_URL + albumItem.albumPhotos[0]?.photoURL
              )}
              slidesToShow={2}
              slidesToScroll={2}
            />
          )} */}
        </div>

        <div className={style.albumItemSlider}>
          <div className="albums-slider album-item-slider">
            <AlbumItemSlider baseUrl={BASE_URL} albumItem={albumItem} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumItem;
