import style from "./PageTitle.module.css";

const PageTitle: React.FC<{
  title: string;
  paddingLeft?: number;
  center?: boolean;
}> = ({ title, paddingLeft, center }) => {
  return (
    <div
      style={{ paddingLeft: `${`${paddingLeft}px`}`, fontSize: "24px" }}
      className={`${style.pageTitle} ${center ? style.center : ""}`}
    >
      <h2 className={`${center ? style.centerTitle : ""}`}>{title}</h2>
      <div className={style.pageTitleRow}></div>
    </div>
  );
};

export default PageTitle;
