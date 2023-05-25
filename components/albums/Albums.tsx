import Loader from "../shared/loader/Loader";
import style from "./Albums.module.css";
import { Album } from "@/pages/models/album.interface";
import PageTitle from "../shared/page-title/PageTitle";
import AlbumsSlider from "./albumsSlider/AlbumsSlider";

interface AlbumsProps {
  albums: Album[];
  loading: boolean;
}

const Albums: React.FC<AlbumsProps> = ({ albums, loading }) => {
  return (
    <>
      <div className={style.albums}>
        <div className={style.albumsHead}>
          <h2 className={style.albumsTitle}>ფოტო გალერეა</h2>
          <div className={style.albumsItems}>
            <img
              className={style.albumsImg}
              src="/main_assets/png/Albums-img-1.png"
              alt="albums"
            />
            <img
              className={style.albumsImg}
              src="/main_assets/png/Albums-img-2.png"
              alt="albums"
            />
          </div>
        </div>

        <PageTitle title={"ფოტოები"} paddingLeft={143} />

        <div className={style.albumsSlider}>
          {loading ? (
            <Loader />
          ) : (
            <div className="albums-slider">
              <AlbumsSlider
                albums={albums}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Albums;
