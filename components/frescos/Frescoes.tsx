import { AlbumItem } from "@/pages/models/albumItem.interface";
import Loader from "../shared/loader/Loader";
import ElasticCarouselSlider from "../shared/ElasticCarouselSlider/ElasticCarouselSlider";
import style from "./Frescoes.module.css";

interface FrescoesProps {
  frescoesAlbum: AlbumItem;
  loading: boolean;
}

const Frescoes: React.FC<FrescoesProps> = ({ frescoesAlbum, loading }) => {
  return (
    <>
      <div className={style.frescoes}>
        <div className={style.frescoesHead}>
          <h2 className={style.frescoesTitle}>ფრესკები</h2>
          <div className={style.frescoesItems}>
            <img
              className={style.frescoesImg}
              src="/main_assets/png/frescoes-1.png"
              alt="frescoes"
            />
            <img
              className={style.frescoesImg}
              src="/main_assets/png/frescoes-2.png"
              alt="frescoes"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="frescos-slider">
          <ElasticCarouselSlider slides={frescoesAlbum.albumPhotos} />
        </div>
      )}
    </>
  );
};

export default Frescoes;
