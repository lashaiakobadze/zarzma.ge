import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </LanguageProvider>
  );
}
