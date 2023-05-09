import style from "./PageTitle.module.css";

const PageTitle: React.FC<{ title: string, paddingLeft: number }> = ({ title, paddingLeft }) => {
  return (
    <div style={{ paddingLeft: `${`${paddingLeft}px`}`, fontSize: '24px' }} className={style.pageTitle}>
      <h2>{title}</h2>
      <div className={style.pageTitleRow}></div>
    </div>
  );
};

export default PageTitle;
