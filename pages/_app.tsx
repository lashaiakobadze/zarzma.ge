import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { MobileProvider } from "@/contexts/MobileContext";

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: [
    {
      path: "../public/fonts/DM-Batonishvili.ttf",
    },
    {
      path: "../public/fonts/bpg_mrgvlovani_caps_2010.ttf",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <MobileProvider>
        <Header />
        <main className={myFont.className}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </MobileProvider>
    </LanguageProvider>
  );
}
