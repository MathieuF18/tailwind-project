"use client";

import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

const MainHeader = () => {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div className=" bg-white flex justify-between items-center px-4 h-12 mb-4">
      <div onClick={toggleMenu}>
        <FaBars className="cursor-pointer lg:hidden" />
      </div>
      <div>Brand</div>
      
    </div>
  );
};

export default MainHeader;
