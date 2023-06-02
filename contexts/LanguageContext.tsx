import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

type LanguageContextProps = {
  children: React.ReactNode;
};

type LanguageContextValue = {
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const LanguageProvider: React.FC<LanguageContextProps> = ({ children }) => {
  const [language, setLanguageState] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const preferredLanguage = getPreferredLanguage();
    setLanguageState(preferredLanguage);
    const saveLanguageToStorage = (lang: string) => {
      localStorage.setItem("language", lang);
    };

    saveLanguageToStorage(preferredLanguage);
    // Redirect to the preferred language route if the current route doesn't have a language prefix
    if (!router.pathname.startsWith(`/${preferredLanguage}`)) {
      router.push(`/${preferredLanguage}${router.asPath}`);
    }
  }, []);

  const getPreferredLanguage = (): string => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage || "geo";
  };

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const getLanguageFromContext = (): string => {
  return localStorage.getItem("language") || "geo";
};

export { LanguageContext, LanguageProvider, getLanguageFromContext };
