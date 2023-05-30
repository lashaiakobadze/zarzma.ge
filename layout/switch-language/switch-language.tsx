import React, { useContext, useState } from "react";
import Image from "next/image";
import i18nConfig from "../../i18n.json";
import useTranslation from "next-translate/useTranslation";
import { LanguageContext } from "@/contexts/LanguageContext";
import style from "./switch-language.module.css";

const SwitchLanguage: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext)!;
  const { locales, defaultLocale } = i18nConfig;
  const { t } = useTranslation("common");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className={style.dropdown}>
      <Image
        src={`/main_assets/flag-${language}.svg`}
        alt={t(`common:language-name-${language}`)}
        onClick={handleDropdownToggle}
        width={21}
        height={13}
      />
      {isDropdownOpen && (
        <ul
          className={style.dropdownMenu}
          aria-labelledby="dropdown-basic-button"
        >
          {locales.map((lng) => {
            if (lng === language) return null;

            return (
              <Image
                key={lng}
                src={`/main_assets/flag-${lng}.svg`}
                alt={t(`common:language-name-${lng}`)}
                onClick={() => handleLanguageChange(lng)}
                width={21}
                height={13}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SwitchLanguage;
