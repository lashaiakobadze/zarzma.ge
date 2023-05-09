import Header from "@/layout/header/Header";
import Footer from "@/layout/footer/Footer";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import FoundationPage from './foundation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  );
}
