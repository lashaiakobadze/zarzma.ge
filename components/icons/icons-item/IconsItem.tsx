import { Article } from "@/models/article.interface";
import Image from "next/image";
import style from "./IconsItem.module.css";

const BASE_URL = process.env.dataUrl;

interface ArticleProps {
  article: Article;
}

const IconsItem: React.FC<ArticleProps> = ({ article }) => {
  const imgUrl = BASE_URL + article?.photoUrl;

  return (
    <>
      <div className={style.IconsItem}>
        {article?.photoUrl && BASE_URL && (
          <Image src={imgUrl} alt={article?.title} width={225} height={289} />
        )}

        <h2>{article?.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: article?.text }}></p>
      </div>
    </>
  );
};

export default IconsItem;
