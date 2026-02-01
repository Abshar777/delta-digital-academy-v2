import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import TopBar from "../global/topBar";
import BottomBar from "./bottomBar";
import {Preloader} from "./preloader";
import Cursor from "./cursor";
import { Toaster } from "sonner";

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Preloader  />
      {/* <TopBar /> */}
      <Toaster position="top-center" />
      <Cursor/>
      <Nav />
      {children}
      <BottomBar />
      <Footer />
    </>
  );
};

export default IndexLayout;
