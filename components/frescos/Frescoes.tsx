import { Article } from "@/pages/models/article.interface";
import Image from "next/image";
import style from "./Frescoes.module.css";

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
          <img
            className={style.frescoesImg}
            src="/main_assets/png/frescoes.png"
            alt="frescoes"
          />
        </div>
      </div>
    </>
  );
};

export default Frescoes;
