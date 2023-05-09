import React from "react";
import Image from "next/image";
import style from "./Header.module.css";
import NavigationItem from "@/components/shared/navItem/NavItem";

const dropdownItems: {
  label: string;
  href: string;
}[] = [
  { label: "ფოტოები", href: "galleria/photos" },
  { label: "ვიდეოები", href: "galleria/videos" },
  { label: "ფრესკები", href: "galleria/chants" },
  { label: "ხატები", href: "galleria/icons" },
];

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <Image
        src="../main_assets/logo-zarzma.svg"
        alt="logo-zarzma"
        width={43}
        height={47}
      />

      <nav className={style.header__container}>
        <div className={style.header__item}>
          <Image
            src="../main_assets/Play-button-Patriarch-Illia.svg"
            alt="play-button"
            width={24}
            height={24}
          />
        </div>

        <div className={style.header__item}>
          <NavigationItem
            href="/galleria"
            label="გალერია"
            dropdownItems={dropdownItems}
          />
        </div>

        <div className={style.header__item}>
          <NavigationItem href="/chants" label="საგალობლები" />
        </div>

        <div className={`${style.header__item} ${style.header__itemCenter}`}>
          <a href="/">
            <h1 className={style.header__title}>ზარზმის მამათა მონასტერი</h1>
          </a>
        </div>

        <div className={style.header__item}>
          <NavigationItem href="/publications" label="გამოცემები" />
        </div>

        <div className={style.header__item}>
          <NavigationItem href="/handicraft" label="ხელსაქმე" />
        </div>

        <div className={style.header__item}>
          <NavigationItem href="/about" label="შესახებ" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
