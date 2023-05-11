import React from 'react';
import style from "./Loader.module.css";

interface LoaderProps {
  size?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = '50px' }) => {
  return (
    // style={{ width: size, height: size }}
    <div className={style.loaderContainer}> 
      <div className={style.ldsRing}><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loader;
