"use client";
import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Nav = () => {

  return (
    <div className="w-fit md:w-full">
      <MobileNav />
      <DesktopNav />
    </div>
  );
};

export default Nav;
