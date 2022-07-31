import React from "react";
import style from "../.././styles/TravelFormHeader.module.css"

const FormHeader = () => {
  return (
    <div className={style.headerContainer}>
      <h1>Creating Trips and Memories. Its what we do!</h1>
      <h2>
        At Travel Wise, we understand travel is key to a fullfilled lifestyle.
        We take away the stress and pressure of endless hours of research, to
        bundle some of the greatest experiences together, for an ease free
        travel experience.
      </h2>
    </div>
  );
};

export default FormHeader;
