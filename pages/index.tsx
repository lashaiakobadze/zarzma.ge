import SlickSlider from '@/components/slickSlider/SlickSlider';
import Head from 'next/head'

const images = [
  '../slider_assets/slider1.png',
  '../slider_assets/slider2.png',
  '../slider_assets/slider3.png',
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/main_assets/logo-zarzma.svg" />
      </Head>
        <SlickSlider images={images} />
    </>
  )
}