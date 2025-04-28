// import Header from "@/layout/header/Header";
// import Footer from "@/layout/footer/Footer";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { MobileProvider } from "@/contexts/MobileContext";

export default function App({
  // Component, pageProps
}: AppProps) {
  return (
    <>
      <LanguageProvider>
        <MobileProvider>
          {/* <Header /> */}
          {/* <Component {...pageProps} /> */}
          {/* <Footer /> */}
                {/* <img width="100%" height="100%" src="/1_9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="" /> */}

        </MobileProvider>
      </LanguageProvider>
      <Analytics />
    </>
  );
}
