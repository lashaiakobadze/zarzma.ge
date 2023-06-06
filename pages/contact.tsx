import React, { useContext } from "react";
import Contact from "@/components/contact/Contact";
import { NextPage } from "next";
import MobileContext from "@/contexts/MobileContext";

const ContactPage: NextPage = () => {
  const { isMobile } = useContext(MobileContext);

  return <Contact isMobile={isMobile} />;
};

export default ContactPage;
