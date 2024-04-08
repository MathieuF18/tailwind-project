import { ModaleContext } from "@/context/ModaleContext";
import React, { useContext } from "react";

const CreateVisitModale = () => {
  const { createVisit, visit, errors, showModal, toggleCreateVisitModale } =
    useContext(ModaleContext);

  return (

    <div className="fixed top-0 p-28 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className=" bg-slate-400 p-6 w-96">
        <form className="flex flex-col" onSubmit={createVisit}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="w-full" />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" className="w-full" />
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="long_description">Long Description</label>
            <textarea id="long_description" name="long_description" className="w-full" />
            {errors.long_description && (
              <p className="text-red-500">{errors.long_description}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="duration">Duration</label>
            <input type="text" id="duration" name="duration" className="w-full" />
            {errors.duration && (
              <p className="text-red-500">{errors.duration}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="img">Image</label>
            <input type="text" id="img" name="img" className="w-full" />
            {errors.img && <p className="text-red-500">{errors.img}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="size">Size</label>
            <input type="text" id="size" name="size" className="w-full" />
            {errors.size && <p className="text-red-500">{errors.size}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" className="w-full" />
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
        <button onClick={() => toggleCreateVisitModale(false)}>Close</button>
      </div>
    </div>
  );
};

export default CreateVisitModale;
