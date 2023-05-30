import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import SwitchLanguage from "../switch-language/switch-language";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <Link
          href={"/foundation"}
          key={"საქველმოქმედო ფონდი სავანე"}
          legacyBehavior
        >
          <a className={styles.columnItem}>{"საქველმოქმედო ფონდი სავანე"}</a>
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
          key={"© 2023 ზარზმის მამათა მონასტერი"}
          legacyBehavior
        >
          <a>{"© 2023 ზარზმის მამათა მონასტერი"}</a>
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
            <Link href={"/contact"} key={"კონტაქტი"} legacyBehavior>
              <a>{"კონტაქტი"}</a>
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link href={"/foundation"} key={"შემოწირულობა"} legacyBehavior>
              <a>{"შემოწირულობა"}</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
