"use client";

import React, { useContext } from "react";
import MainHeader from "./MainHeader";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa";
import { MenuContext } from "@/context/MenuContext";

const MainLayout = ({ children }) => {
  const { isOpen } = useContext(MenuContext);

  return (
    <div className=" bg-gray-200 w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside
          className={` bg-white rounded-lg transition-all duration-200 overflow-hidden ${
            isOpen ? "w-60 p-4" : "w-0"} lg: w-60 lg:p-4`}
        >
          <ul>
            <li className="flex justify-start items-center cursor-pointer hover:bg-blue-200 p-1 rounded-lg">
              <AiOutlineHome className="inline-block mr-2  " />
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-start items-center cursor-pointer hover:bg-blue-200 p-1 rounded-lg">
              <GrProjects className="inline-block mr-2  " />
              <h3 className=" flex-1">ThatTimeInParis</h3>
              <FaAngleRight />
            </li>
          </ul>
        </aside>
        <main className=" w-full">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
