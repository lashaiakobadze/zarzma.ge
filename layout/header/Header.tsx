import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import style from "./Header.module.css";
import NavigationItem from "@/components/shared/navItem/NavItem";
import Link from "next/link";
import { Howl } from "howler";
import MobileContext from "@/contexts/MobileContext";

const BASE_URL = process.env.dataUrl;

const Header: React.FC = () => {
  const { t, lang } = useTranslation("common");
  const { isMobile } = useContext(MobileContext);

  const dropdownItems: {
    label: string;
    href: string;
  }[] = [
    { label: t("photos"), href: "/gallery/albums" },
    { label: t("videos"), href: "/gallery/videos" },
    { label: t("frescoes"), href: "/gallery/frescoes" },
    { label: t("icons"), href: "/gallery/icons" },
  ];
  const playSound = `${BASE_URL}/Zarzma/Chants/ufalo_shegviwyalen.mp3`;

  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Howl | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const initializeSound = () => {
    if (!sound) {
      setSound(
        new Howl({
          src: [playSound],
          onload: () => {
            console.log("handleClick");
          },
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

  // useEffect(() => {
  //   const initializeSound = () => {
  //     setSound(
  //       new Howl({
  //         src: [playSound],
  //         onload: () => {},
  //       })
  //     );
  //   };

  //   initializeSound();
  // }, []);

  // const handleClick = () => {
  //   if (sound) {
  //     if (!sound.playing()) {
  //       sound.play();
  //       setIsPlaying(true);
  //     } else {
  //       sound.stop();
  //       setIsPlaying(false);
  //     }
  //   }
  // };

  const handleClickHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile ? (
        <header className={style.header}>
          <a href={`/${lang}`}>
            <img 
              src="/main_assets/logo.png" 
              alt="logo"               
              height={47}
            />
            {/* <Image
              src="/main_assets/logo-zarzma-mob.svg"
              alt="logo-zarzma"
              width={43}
              height={47}
              priority // Optional: prioritize loading this image
              loading="eager" // Optional: load the image eagerly
              quality={100} // Optional: specify the image quality (0-100)
            /> */}
          </a>

          <div className={`${style.header__item} ${style.header__itemCenter}`}>
            <Link href={"/"} legacyBehavior>
              <h1
                className={`${style.header__title} ${style.header__titleMob}`}
              >
                ზარზმის მამათა მონასტერი
              </h1>
            </Link>
          </div>

          <button
            className={`${style.hamburger} ${
              isOpen ? style.hamburgerOpen : ""
            }`}
            onClick={handleClickHamburger}
          >
            <span className={style.line}></span>
            <span className={style.line}></span>
            <span className={style.line}></span>
          </button>

          {isOpen && (
            <div className={style.overlay}>
              <nav className={style.navbar}>
                <div className={style.header__item} onClick={handleClick}>
                  <Image
                    src={
                      !isPlaying
                        ? "/main_assets/play.svg"
                        : "/main_assets/stop.svg"
                    }
                    alt="play-button"
                    width={24}
                    height={24}
                  />
                </div>

                <div
                  className={style.header__itemMob}
                  onClick={handleClickHamburger}
                >
                  <NavigationItem href="/gallery/albums" label={t("photos")} />
                </div>
                <div
                  className={style.header__itemMob}
                  onClick={handleClickHamburger}
                >
                  <NavigationItem href="/gallery/videos" label={t("videos")} />
                </div>
                <div
                  className={style.header__itemMob}
                  onClick={handleClickHamburger}
                >
                  <NavigationItem
                    href="/gallery/frescoes"
                    label={t("frescoes")}
                  />
                </div>
                <div
                  className={style.header__itemMob}
                  onClick={handleClickHamburger}
                >
                  <NavigationItem href="/gallery/icons" label={t("icons")} />
                </div>

                <div
                  className={style.header__itemMob}
                  onClick={handleClickHamburger}
                >
                  <NavigationItem href="/chants" label={t("chants")} />
                </div>

                <div
                  className={style.header__itemMob}
                  onClick={handleClickHamburger}
                >
                  <NavigationItem
                    href="/publications"
                    label={t("publications")}
                  />
                </div>

                <div
                  className={style.header__itemMob}
                  onClick={handleClickHamburger}
                >
                  <NavigationItem href="/handicraft" label={t("handicraft")} />
                </div>

                <div
                  className={style.header__itemMob}
                  onClick={handleClickHamburger}
                >
                  <NavigationItem href="/about" label={t("about")} />
                </div>
              </nav>
            </div>
          )}
        </header>
      ) : (
        <header className={style.header}>
          <a href={`/${lang}`}>
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
                src={
                  !isPlaying ? "/main_assets/play.svg" : "/main_assets/stop.svg"
                }
                alt="play-button"
                width={24}
                height={24}
              />
            </div>

            <div className={style.header__item}>
              <NavigationItem
                href="/gallery"
                label={t("gallery")}
                dropdownItems={dropdownItems}
              />
            </div>

            <div className={style.header__item}>
              <NavigationItem href="/chants" label={t("chants")} />
            </div>

            <div
              className={`${style.header__item} ${style.header__itemCenter}`}
            >
              <Link href={"/"} legacyBehavior>
                <h1 className={style.header__title}>
                  ზარზმის მამათა მონასტერი
                </h1>
              </Link>
            </div>

            <div className={style.header__item}>
              <NavigationItem href="/publications" label={t("publications")} />
            </div>

            <div className={style.header__item}>
              <NavigationItem href="/handicraft" label={t("handicraft")} />
            </div>

            <div className={style.header__item}>
              <NavigationItem href="/about" label={t("about")} />
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
