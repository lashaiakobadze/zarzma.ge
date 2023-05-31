import React from "react";
import Image from "next/image";
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation';
import styles from "./Footer.module.css";
import SwitchLanguage from "../switch-language/switch-language";

const Footer: React.FC = () => {
  const { t, lang } = useTranslation('common');

  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <Link
          href={"/foundation"}
          key={t('charitable-foundation-savane')}
          legacyBehavior
        >
          <a className={styles.columnItem}>{t('charitable-foundation-savane')}</a>
        </Link>
      </div>

      <div className={`${styles.column} ${styles.column__between}`}>
        <Image
          src="/main_assets/cross.svg"
          alt="cross"
          className={styles.column__img}
          width={13}
          height={23}
        />
        <Link
          href={"/contact"}
          key={t('copyright')}
          legacyBehavior
        >
          <a>{t('copyright')}</a>
        </Link>
      </div>

      <div className={styles.column}>
        <ul>
          <li>
            <a href="https://www.facebook.com/Zarzmamonastery/" target="_blank">
              <Image
                src="/main_assets/facebook.svg"
                alt="facebook"
                width={15}
                height={14}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@zarzmamonasteryofficial7577/videos"
              target="_blank"
            >
              <Image
                src="/main_assets/youtube.svg"
                alt="youtube"
                width={19}
                height={19}
              />
            </a>
          </li>
          <li>
            <SwitchLanguage />
          </li>
          <li>
            <Link href={"/contact"} key={t('contact')} legacyBehavior>
              <a>{t('contact')}</a>
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link href={"/foundation"} key={t('donation')} legacyBehavior>
              <a>{t('donation')}</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
