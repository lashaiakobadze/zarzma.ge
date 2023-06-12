import { AlbumItem } from "@/models/albumItem.interface";
import Loader from "../shared/loader/Loader";
import style from "./Frescoes.module.css";
import FrescoesSlider from "./frescoesSlider/FrescoesSlider";

interface FrescoesProps {
  frescoesAlbum: AlbumItem;
  loading: boolean;
  isMobile: boolean;
}

const BASE_URL = process.env.dataUrl + "/";

const Frescoes: React.FC<FrescoesProps> = ({
  frescoesAlbum,
  loading,
  isMobile,
}) => {
  return (
    <>
      <div className={style.frescoes}>
        <div className={style.frescoesHead}>
          {!isMobile && <h2 className={style.frescoesTitle}>ფრესკები</h2>}
          <div
            className={`${style.frescoesItems} ${
              isMobile ? style.frescoesItemsMob : ""
            }`}
          >
            <img
              className={`${style.frescoesImg} ${
                isMobile ? style.frescoesImgMob : ""
              }`}
              src="/main_assets/png/frescoes-1.png"
              alt="frescoes"
            />
            <img
              className={`${style.frescoesImg} ${
                isMobile ? style.frescoesImgMob : ""
              }`}
              src="/main_assets/png/frescoes-2.png"
              alt="frescoes"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className={style.frescoesLoader}>
          <Loader size={"298px"} />
        </div>
      ) : (
        <>
          {!isMobile ? (
            <div className="frescoes-slider">
              <FrescoesSlider slides={frescoesAlbum.albumPhotos} />
            </div>
          ) : (
            <>
              <div className={style.frescoesImages}>
                {frescoesAlbum.albumPhotos.length &&
                  frescoesAlbum.albumPhotos.map((image, index) => (
                    <img
                      key={image?.id}
                      className={`${style.imgMob} ${
                        (index + 1) % 3 === 0 ? style.thirdImg : ""
                      }`}
                      src={`${BASE_URL}${image.photoURL}`}
                      alt={image.name}
                    />
                  ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Frescoes;
