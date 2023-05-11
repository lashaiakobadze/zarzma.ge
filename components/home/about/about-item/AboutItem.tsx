import { Article } from "@/pages/models/article.interface";
import Image from "next/image";
import Link from "next/link";
import style from "./AboutItem.module.css";

const BASE_URL = process.env.dataUrl;

interface ArticleProps {
  article: Article;
}

const AboutItem: React.FC<ArticleProps> = ({ article }) => {
  const imgUrl = BASE_URL + article?.photoUrl;

  return (
    <>
      <div className={style.aboutItem}>
        {(article?.photoUrl && BASE_URL) && (
          <Image
            src={imgUrl}
            alt={article?.title}
            width={202}
            height={260}
          />
        )}

        <div className={style.aboutItemContent}>
          <h2>{article?.title}</h2>
          <p className={style.abbreviate}>{article?.text}</p>
          <Link href={"/about"} legacyBehavior>
            <button>
              წაიკითხე მეტი
              <Image
                src="/main_assets/Vector.svg"
                alt="savane"
                width={8}
                height={10}
              />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutItem;
