"use client";

import React, { useContext, useEffect } from "react";
import { useState } from "react";
import CreateVisitModale from "./components/Modals/CreateVisitModale";
import { MenuContext } from "@/context/MenuContext";
import { ModaleContext } from "@/context/ModaleContext";
import Link from "next/link";

const Accueil = () => {
  useEffect(() => {
    console.log(toggleCreateVisitModale);
  }, []);
  const { showModal, toggleCreateVisitModale } = useContext(ModaleContext);

  return (
    
    <div className="flex justify-center items-center h-screen">
      <div>
        <Link href="/CreateVisit">
        <div
          
          className=" cursor-pointer hover:bg-blue-400 hover:text-zinc-50 border border-gray-500 rounded-lg p-4"
        >
          <button>Ajouter une visite</button>
        </div>
        </Link>
        {showModal && <CreateVisitModale />}
      </div>
    </div>
  );
};

export default Accueil;
