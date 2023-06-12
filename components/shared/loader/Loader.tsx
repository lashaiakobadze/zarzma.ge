import React from 'react';
import style from "./Loader.module.css";

interface LoaderProps {
  size?: string;
}

const Loader: React.FC<LoaderProps> = ({ size }) => {
  return (
    <div className={style.loaderContainer} style={{ height: size ? size : size }}> 
      <div className={style.ldsRing}><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loader;
