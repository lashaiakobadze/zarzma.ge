import React, { createContext, useEffect, useState } from "react";

type MobileContextValue = {
  isMobile: boolean;
};

const MobileContext = createContext<MobileContextValue>({isMobile: false});

export const MobileProvider: React.FC<any> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as per your requirements
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (typeof children === "undefined") return null; // Add this line to handle when children is undefined

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileContext;
