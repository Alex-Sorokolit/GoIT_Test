import React from "react";
import css from "./Section.module.css";

const Section = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Section;
