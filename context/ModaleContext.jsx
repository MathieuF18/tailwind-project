"use client";
import { set } from "mongoose";
import { createContext, useState } from "react";

export const ModaleContext = createContext();

const ModaleContextProvider = ({ children }) => {
  const [visit, setVisit] = useState(null);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const toggleCreateVisitModale = (e) => {
    setShowModal(e);
  };

  const createVisit = (e) => {
    e.preventDefault();
    let validation = true;

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

    if (validation === false) {
      return;
    }

    setVisit(newVisit);

    e.target.reset();
  };

  return (
    <ModaleContext.Provider
      value={{ createVisit, visit, errors, showModal, toggleCreateVisitModale }}
    >
      {children}
    </ModaleContext.Provider>
  );
};

export default ModaleContextProvider;
