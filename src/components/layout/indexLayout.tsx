import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import TopBar from "../global/topBar";
import BottomBar from "./bottomBar";
import IntroPreloader from "./preloader";

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    {/* <IntroPreloader  /> */}
      {/* <TopBar /> */}
      <Nav />
      {children}
      <BottomBar />
      <Footer />
    </>
  );
};

export default IndexLayout;
