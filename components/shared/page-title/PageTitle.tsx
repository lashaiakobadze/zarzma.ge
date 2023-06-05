import style from "./PageTitle.module.css";

const PageTitle: React.FC<{
  title: string;
  paddingLeft?: number;
  center?: boolean;
  isMobile?: boolean;
}> = ({ title, paddingLeft, center, isMobile }) => {
  console.log('isMob', isMobile);

  return (
    <div
      style={{
        paddingLeft: `${`${paddingLeft}px`}`,
        fontSize: "24px",
      }}
      className={`${style.pageTitle} ${isMobile ? style.pageTitleMob : ""} ${center ? style.center : ""}`}
    >
      <h2 className={`${center ? style.centerTitle : ""}`}>{title}</h2>
      <div className={`${style.pageTitleRow} ${isMobile ? style.pageTitleRowMob : ""}`}></div>
    </div>
  );
};

export default PageTitle;
