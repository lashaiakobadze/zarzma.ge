import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import styles from "./Footer.module.css";
import SwitchLanguage from "../switch-language/switch-language";
import MobileContext from "@/contexts/MobileContext";

const Footer: React.FC = () => {
  const { isMobile } = useContext(MobileContext);
  const { t } = useTranslation("common");

  return (
    <footer className={`${styles.footer} ${isMobile ? styles.footerMob : ""}`}>
      <div className={styles.column}>
        <Link
          href={"/foundation"}
          key={t("charitable-foundation-savane")}
          legacyBehavior
        >
          <a
            className={`${styles.columnItem} ${
              isMobile ? styles.columnItemMob : ""
            }`}
          >
            {t("charitable-foundation-savane")}
          </a>
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
        <Link href={"/contact"} key={t("copyright")} legacyBehavior>
          <a>{t("copyright")}</a>
        </Link>
      </div>

      <div className={styles.column}>
        <ul className={`${isMobile ? styles.columnUlMob : ''}`}>
          <div className={`${styles.socialContent}`}>
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
            <SwitchLanguage isMobile={isMobile} />
          </li>
          </div>
          <div className={`${styles.contactContent}`}>
            <li>
              <Link href={"/contact"} key={t("contact")} legacyBehavior>
                <a>{t("contact")}</a>
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link href={"/foundation"} key={t("donation")} legacyBehavior>
                <a>{t("donation")}</a>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
