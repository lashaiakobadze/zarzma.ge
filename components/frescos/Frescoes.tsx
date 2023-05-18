import { Article } from "@/pages/models/article.interface";
import InfinitySlider from "../shared/infinitySlider/InfinitySlider";
import style from "./Frescoes.module.css";

const slideImages = [
  "../slider_assets/slider1.png",
  "../slider_assets/slider2.png",
  "../slider_assets/slider3.png",
];

interface FrescoesProps {
  frescoes: Article[];
  loading: boolean;
}

const Frescoes: React.FC<FrescoesProps> = ({ frescoes, loading }) => {
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

        <InfinitySlider slides={slideImages} />
      </div>
    </>
  );
};

export default Frescoes;
