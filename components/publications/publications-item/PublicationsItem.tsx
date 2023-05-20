import { Article } from "@/pages/models/article.interface";
import Image from "next/image";
import style from "./PublicationsItem.module.css";

const BASE_URL = process.env.dataUrl;

interface ArticleProps {
  article: Article;
}

const PublicationsItem: React.FC<ArticleProps> = ({ article }) => {
  const imgUrl = BASE_URL + article?.photoUrl;

  return (
    <>
      {article?.text !== "*" ? (
        <div className={style.publicationsItem}>
          <Image src={imgUrl} alt={article?.title} width={225} height={289} />
          <h2>{article?.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: article?.text }}></p>
        </div>
      ) : (
        <div
          className={`${style.publicationsItem} ${style.publicationsItem__withoutText}`}
        >
          <img src={imgUrl} alt={article?.title} />
          <h2>{article?.title}</h2>
        </div>
      )}
    </>
  );
};

export default PublicationsItem;
