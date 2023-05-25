import React, { useState } from "react";
import Image from "next/image";
import style from "./Header.module.css";
import NavigationItem from "@/components/shared/navItem/NavItem";
import Link from "next/link";
import { Howl } from "howler";

const dropdownItems: {
  label: string;
  href: string;
}[] = [
  { label: "ფოტოები", href: "/gallery/albums" },
  { label: "ვიდეოები", href: "/gallery/videos" },
  { label: "ფრესკები", href: "/gallery/frescoes" },
  { label: "ხატები", href: "/gallery/icons" },
];

const BASE_URL = process.env.dataUrl;

const Header: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Howl | null>(null);
  const playSound =
    `${BASE_URL}/Zarzma/Chants/ufalo_shegviwyalen.mp3`;

  const initializeSound = () => {
    if (!sound) {
      setSound(
        new Howl({
          src: [playSound],
        })
      );
    }
  };

  const handleClick = () => {
    if (!sound) {
      initializeSound();
    }

    if (sound) {
      if (isPlaying) {
        sound.stop();
      } else {
        sound.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <header className={style.header}>
      <a href="/">
        <Image
          src="/main_assets/logo-zarzma.svg"
          alt="logo-zarzma"
          width={43}
          height={47}
        />
      </a>

      <nav className={style.header__container}>
        <div className={style.header__item} onClick={handleClick}>
          <Image
            src={!isPlaying ? '/main_assets/play.svg' :  "/main_assets/stop.svg"}
            alt="play-button"
            width={24}
            height={24}
          />
        </div>

        <div className={style.header__item}>
          <NavigationItem
            href="/gallery"
            label="გალერეა"
            dropdownItems={dropdownItems}
          />
        </div>

        <div className={style.header__item}>
          <NavigationItem href="/chants" label="საგალობლები" />
        </div>

        <div className={`${style.header__item} ${style.header__itemCenter}`}>
          <Link href={"/"} legacyBehavior>
            <h1 className={style.header__title}>ზარზმის მამათა მონასტერი</h1>
          </Link>
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
