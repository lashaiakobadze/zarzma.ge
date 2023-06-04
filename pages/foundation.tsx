import React, { useContext } from "react";
import Foundation from "@/components/foundation/Foundation";
import { NextPage } from "next";
import MobileContext from "@/contexts/MobileContext";

const FoundationPage: NextPage = () => {
  const { isMobile } = useContext(MobileContext);

  return <Foundation isMobile={isMobile} />;
};

export default FoundationPage;
