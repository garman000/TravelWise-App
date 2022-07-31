import React, { useContext, useEffect, useState } from "react";

import GlobalContext from "../../context/GlobalContext";
import { originValues } from "../../lib/utilityData";
import { airportList } from "../../lib/airportList";
import { specialTrips } from "../../lib/utilityData";

import tripStyle from "../../styles/Trip.module.css";

const SelectOrigin = (props) => {
  const { value, setValue, newValue, setNewValue } = useContext(GlobalContext);
  const [searchText, setSearchText] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);

  const saveUserOrigin = (iatacode, cityname) => {
    setNewValue(iatacode);
    setIsDisplayed(false);
    setSearchText(cityname);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setIsDisplayed(true);
  };

  return (
    <div className={tripStyle.fieldContainer}>
      <fieldset>
        <legend className={tripStyle.legend}>1</legend>

        <div className={tripStyle.selectCtl}>
          <h3>Enter your origin location</h3>
          <input
            type="text"
            placeholder="Enter your city"
            value={searchText}
            onChange={(e) => handleSearch(e)}
          ></input>

          {isDisplayed &&
            airportList
              .filter((val) => {
                if (searchText == "") {
                  return val;
                } else if (
                  val.city.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => {
                return (
                  <div
                    className={tripStyle.inputSearch}
                    value={val.iata_code}
                    onClick={() => saveUserOrigin(val.iata_code, val.city)}
                  >
                    {val.name}
                  </div>
                );
              })}
        </div>
      </fieldset>
    </div>
  );
};

export default SelectOrigin;
