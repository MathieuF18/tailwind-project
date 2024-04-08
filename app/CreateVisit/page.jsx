"use client";

import { ModaleContext } from "@/context/ModaleContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

const CreateVisit = () => {
  const { showModal, toggleCreateVisitModale } = useContext(ModaleContext);
  const [visit, setVisit] = useState(null);
  const [errors, setErrors] = useState({});
  require ('dotenv').config();
  const mongoDBURI = process.env.MONGODB_URI

  const handleSubmit = (e) => {
    
    e.preventDefault();
   
    console.log(mongoDBURI);

   
    const newVisit = {
      name: e.target.name.value,
      description: e.target.description.value,
      long_description: e.target.long_description.value,
      duration: e.target.duration.value,
      img: e.target.img.value,
      size: e.target.size.value,
      price: e.target.price.value,
      path: e.target.path.value,
      link: e.target.link.value,
    };
    let validation = true;
    const InputChecker = (e) => {
      Object.entries(newVisit).forEach(([key, value]) => {
        if (value === "") {
          console.log(key, value);
          setErrors((errors) => ({ ...errors, [key]: `${key} is required` }));
          validation = false;
        } else if (value) {
          setErrors((errors) => ({ ...errors, [key]: "" }));
        }
      });

      Object.entries(newVisit).forEach(([key, value]) => {
        const regex = /[!@#$%^&*(),.?":{}|<>]/g;
        if (regex.test(value)) {
          setErrors((errors) => ({
            ...errors,
            [key]: `${key} contains special characters`,
          }));
        }
      });
    };

    InputChecker(e);

    if (validation === false) {
      return;
    }
    
    setVisit(newVisit);
    sendVisit(newVisit);
  };


  const sendVisit = async (visit) => {
    try {
    const res = await fetch("/api/Visit", {
      method: "POST",
      body: JSON.stringify({ formData: visit }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to created Ticket", res.status);
    }

} catch (error) {console.log(error)};
    
    


  };

  return (
    <>
      <Link
        href="/"
        className=" cursor-pointer hover:bg-blue-400 hover:text-zinc-50 border border-gray-500 rounded-lg p-4"
      >
        {" "}
        Retour{" "}
      </Link>
      <div className="flex justify-center items-center h-screen w-full ">
        <div className="bg-slate-300 p-6 w-10/12">
          <form className="flex flex-col w-full gap-3" onSubmit={handleSubmit}>
            <h2 className=" text-stone-100 text-3xl mb-2">Create a visit</h2>
            <div className="flex flex-col w-52">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="w-full" />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                className="w-full"
              />
              {errors.description && (
                <p className="text-red-500">{errors.description}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="long_description">Long Description</label>
              <textarea
                id="long_description"
                name="long_description"
                className="w-full"
              />
              {errors.long_description && (
                <p className="text-red-500">{errors.long_description}</p>
              )}
            </div>
            <div className="flex flex-col w-52">
              <label htmlFor="duration">Durée de la visite en minute</label>
              <input
                type="number"
                id="duration"
                name="duration"
                className="w-full"
              />
              {errors.duration && (
                <p className="text-red-500">{errors.duration}</p>
              )}
            </div>
            <div className="flex flex-col">
                <label htmlFor="img">nom de l&apos;image</label>
                <input type="text" id="img" name="img" className="w-full" />
                {errors.img && <p className="text-red-500">{errors.img}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="size">Size</label>
              <input type="number" id="size" name="size" className="w-full" />
              {errors.size && <p className="text-red-500">{errors.size}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="price">Price</label>
              <input type="number" id="price" name="price" className="w-full" />
              {errors.price && <p className="text-red-500">{errors.price}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="path">Path</label>
              <input type="text" id="path" name="path" className="w-full" />
              {errors.path && <p className="text-red-500">{errors.path}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="link">Link</label>
              <input type="text" id="link" name="link" className="w-full" />
              {errors.link && <p className="text-red-500">{errors.link}</p>}
            </div>
            <div className="flex justify-center">
              <button type="submit">Create Visit</button>
            </div>
          </form>

          <div>
            <button
              className=" hover:bg-yellow-600"
              onClick={(e) => {
                e.preventDefault();
                console.log(errors);
              }}
            >
              {" "}
              Check visit
            </button>
          </div>
          {visit && (
            <div>
              <h2>Visit Details:</h2>
              <p>Name: {visit.name}</p>
              <p>Description: {visit.description}</p>
              <p>Long Description: {visit.long_description}</p>
              <p>Duration: {visit.duration}</p>
              <p>Image: {visit.img}</p>
              <p>Size: {visit.size}</p>
              <p>Price: {visit.price}</p>
              <p>Path: {visit.path}</p>
              <p>Link: {visit.link}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CreateVisit;
