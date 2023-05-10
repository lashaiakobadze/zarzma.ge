import Image from "next/image";
import style from "./Foundation.module.css";

export default function Foundation() {
  return (
    <div className={style.foundation}>
      <div className={style.foundationContainer}>
        <div className={style.foundation__title}>
          <h2>მონასტრის მხარდამჭერი საქველმმოქმედო ფონდი</h2>
          <Image
            src="/main_assets/savane.svg"
            alt="play-button"
            width={96}
            height={89}
          />
        </div>

        <div className={style.foundation__content}>
          <span className={style.foundation__content__item}>ლარის ანგარიშის რეკვიზიტები</span>
          <span className={style.foundation__content__item}>მიმღები ბანკი: ს.ს. „თიბისი ბანკი“</span>
          <span className={style.foundation__content__item}>ბანკის კოდი: TBCBGE22</span>
          <span className={style.foundation__content__item}>მიმღების ანგარიში: GE02TB7408536080100003</span>
          <span className={style.foundation__content__item}>მიმღების სახელი: ააიპ საქართველოს ზარზმის მონასტრის აღორძინების ფონდი სავანე</span>
        </div>

        <div className={style.foundation__content__gap}></div>

        <div className={style.foundation__content}>
          <span className={`${style.foundation__content__item} ${'fontHelvetica'}`}>For USD/EUR Transfer</span>
          <span className={`${style.foundation__content__item} ${'fontHelvetica'}`}>BENEFICIARY’S BANK: JSC TBC BANK TBILISI, GEORGIA</span>
          <span className={`${style.foundation__content__item} ${'fontHelvetica'}`}>SWIFT: TBCBGE22</span>
          <span className={`${style.foundation__content__item} ${'fontHelvetica'}`}>BEN’S IBAN: GE19TB7408536180100004</span>
          <span className={`${style.foundation__content__item} ${'fontHelvetica'}`}>NAME OF BENEFICIARY: GEORGIAN MONASTERY OF ZARZMA RELIEF FOUNDATION SAVANE NNLE</span>
        </div>

      </div>
    </div>
  );
}