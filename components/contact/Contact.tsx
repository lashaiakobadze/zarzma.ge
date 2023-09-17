import Image from "next/image";
import style from "./Contact.module.css";
import PageTitle from "../shared/page-title/PageTitle";
import useTranslation from "next-translate/useTranslation";

const Contact: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const { t } = useTranslation("common");

  return (
    <div className={style.contact}>
      <div
        className={`${style.contactMap} ${isMobile ? style.contactMapMob : ""}`}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5959.841963097225!2d42.64630789457758!3d41.6790499482468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405d33666b410d49%3A0x3946d4eb9b23a17d!2sZarzma!5e0!3m2!1sen!2sge!4v1694966090844!5m2!1sen!2sge"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>

      <PageTitle
        isMobile={isMobile}
        title={t("contact")}
        paddingLeft={isMobile ? 59 : 200}
      />

      <div
        className={`${style.contactContent} ${
          isMobile ? style.contactContentMob : ""
        }`}
      >
        <div className={style.contactForm}>
        {/* <ContactForm isMobile={isMobile} /> */}
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
        </div>
        <div
          className={`${style.contactItems} ${
            isMobile ? style.contactItemsMob : ""
          }`}
        >
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
};

export default Contact;
