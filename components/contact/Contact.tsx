import Image from "next/image";
import style from "./Contact.module.css";
import Map from "./map/Map";
import { useMemo } from "react";
import { useLoadScript } from "@react-google-maps/api";
import PageTitle from "../shared/page-title/PageTitle";
import ContactForm from "./form/ContactForm";
import Loader from "../shared/loader/Loader";

export default function Contact() {
  const zoom = 12;
  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: 41.51951, lng: 42.16611 }), []);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <Loader/>;
  }

  return (
    <div className={style.contact}>
      <div className={style.contactMap}>
        <Map
          options={mapOptions}
          center={mapCenter}
          zoom={zoom}
          mapContainerStyle={containerStyle}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
        />
      </div>

      <PageTitle title={"კონტაქტი"} paddingLeft={200} />

      <div className={style.contactContent}>
        <div className={style.contactForm}>
          <ContactForm />
        </div>
        <div className={style.contactItems}>
          <div className={style.contactItem}>
            <Image
              src="/main_assets/email-icon.svg"
              alt="email-icon"
              width={15}
              height={11}
            />
            <a href="mailto:gio.khutsishvili@gmail.com">
              gio.khutsishvili@gmail.com
            </a>
          </div>

          <div className={style.contactItem}>
            <Image
              src="/main_assets/phone-icon.svg"
              alt="phone-icon"
              width={15}
              height={15}
            />
            <a href="tel:+995595957888">+995 595 95 78 88</a>
          </div>

          <div className={style.contactItem}>
            <Image
              src="/main_assets/telegram-icon.svg"
              alt="telegram-icon"
              width={15}
              height={13}
            />
            <a
              href="https://telegram.me/giokh"
              target="_blank"
              className={style.link}
            >
              Telegram: @giokh
            </a>
          </div>

          <div className={style.contactItem}>
            <Image
              src="/main_assets/Wikipedia.svg"
              alt="Wikipedia"
              width={20}
              height={20}
            />
            <a
              href="https://en.wikipedia.org/wiki/Zarzma_monastery?fbclid=IwAR2aESkXOFPaiOVE51d89b4hrzC8ZA0ySOJgRrSXzeTko2n8Nsqe4JLrdDU"
              target="_blank"
              className={style.link}
            >
              Wikipedia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
