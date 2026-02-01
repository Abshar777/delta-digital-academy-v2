import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import TopBar from "../global/topBar";
import BottomBar from "./bottomBar";
import IntroPreloader from "./preloader";
import Cursor from "./cursor";

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    {/* <IntroPreloader  /> */}
      {/* <TopBar /> */}
      <Cursor/>
      <Nav />
      {children}
      <BottomBar />
      <Footer />
    </>
  );
};

export default IndexLayout;
