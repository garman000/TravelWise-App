import React, { useContext, useEffect, useState } from "react";

import { useAuthContext } from "../../context/AuthContext";
import { specialTrips } from "../../lib/utilityData";
import GlobalContext from "../../context/GlobalContext";
import { addUserTrips } from "../../lib/trips";

import tripStyle from "../../styles/Trip.module.css";
import { getDateUntilTrip } from "../../lib/timeUntil";

const ChosenEvents = () => {
  const [dblExperiences, setDblExperiences] = useState(false);
  const [sendData, setSendData] = useState([]);
  const [showDuplicates, setShowDuplicates] = useState("");
  const [clicked, setIsClicked] = useState(false);
  const [currentUser, setCurrentUser] = useAuthContext();
  const {
    formState,
    setFormState,
    setTripInfo,
    value,
    setSkyscanner,
    setKayak,
    newValue,
    tripInfo,
  } = useContext(GlobalContext);

  const onHandleChangeStart = (e) => {
    const testDate = new Date(e.target.value);

    setFormState({
      ...formState,
      ["startDate"]: e.target.value,
    });
  };

  const onHandleChangeEnd = (e) => {
    setFormState({
      ...formState,
      ["endDate"]: e.target.value,
    });
  };

  const searchResult = () => {
    specialTrips.map(() => {
      const setOrigin = newValue;
      const skyscannerParam = `https://www.skyscanner.co.il/transport/flights/${setOrigin}/${formState.airportCode}/${formState.startDate}/${formState.endDate}/`;
      const kayakParam = `https://www.il.kayak.com/explore/${setOrigin}-${formState.airportCode}/${formState.startDate},${formState.endDate}`;
      setSkyscanner(skyscannerParam);
      setKayak(kayakParam);
    });
    setIsClicked((prev) => !prev);
  };

  useEffect(() => {
    function handleDuplicates() {
      const duplicateEvents = specialTrips
        .map((trip) => trip.event)
        .filter((trip, i, tripEvent) => tripEvent.indexOf(trip) !== i);
      const duplicatedEvents = specialTrips.filter((obj) =>
        duplicateEvents.includes(obj.event)
      );
      setShowDuplicates(duplicatedEvents);
      if(duplicatedEvents.events === duplicateEvents) {
        console.log('duplicated event')
        // setDblExperiences(true)
      } else {
        // setDblExperiences(false)
        console.log('no duplicates')
      }
      console.log("duplicatedEvents ==>", duplicatedEvents.event);
      
    }
  handleDuplicates()
  }, []);

  const handleButtonClick = (oneTrip, originDate) => {
    setFormState(oneTrip);
    let eventStartDate = new Date(originDate).getTime();
    let todaysDate = new Date().getTime();
    const daysTilEvent = days(eventStartDate, todaysDate);

    if (daysTilEvent <= 0) {
      setTripInfo("0");
    } else {
      setTripInfo(daysTilEvent);
    }
  };

  function days(eventStartDate, todaysDate) {
    let difference = eventStartDate - todaysDate;
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  }

 

  const saveUserSelection = async (e) => {
    e.preventDefault();
    setSendData([formState]);

    const trips = {
      origin: newValue,
      location: formState.location,
      event: formState.event,
      eventStartDate: formState.startDate,
      currentUser: currentUser.user.name,
      userId: currentUser.user._id,
      iframe: formState.iframe,
    };
    const newTrip = await addUserTrips(trips);
  };

  useEffect(() => {
    const tripData = {
      userId: currentUser.user._id,
      currentUser: currentUser.user.name,
      timeUntil: tripInfo,
    };
    getDateUntilTrip(tripData);
  }, [tripInfo]);

  return (
    <div className={tripStyle.fieldContainer}>
      <fieldset>
        <legend className={tripStyle.legend}>2</legend>
        <div className={tripStyle.containerButtons}>
          <h3>Memorable experiences packages. Please select one !</h3>
        </div>
        <div>
        {dblExperiences ? 
        <div className={tripStyle.btnCtl}>
          {/* {showDuplicates &&
            showDuplicates.map((data) => (
              <button
                className={tripStyle.btn}
                onClick={() => handleButtonClick(data, data.startDate)}
              >
                {data.location}
              </button>
            ))} */}
             {specialTrips.map((oneTrip) => (
            <button
              className={tripStyle.btn}
              onClick={() => handleButtonClick(oneTrip, oneTrip.startDate)}
            >
              {oneTrip.event}
            </button>
          ))}
            </div> : <div>
          {specialTrips.map((oneTrip) => (
            <button
              className={tripStyle.btn}
              onClick={() => handleButtonClick(oneTrip, oneTrip.startDate)}
            >
              {oneTrip.event}
            </button>
          ))}
           {/* {showDuplicates &&
            showDuplicates.map((data) => (
              <button
                className={tripStyle.btn}
                onClick={() => handleButtonClick(data, data.startDate)}
              >
                {data.location}
              </button>
            ))} */}
          </div>}
        </div>

        {formState &&
          formState.startDate &&
          formState.endDate &&
          formState.location &&
          formState.event && (
            <div className={tripStyle.inputCtl}>
              <label>Start Date: </label>
              <input
                name="date"
                type="date"
                placeholder="Please select appropriate dates"
                value={formState.startDate}
                onChange={onHandleChangeStart}
              />

              <label>End Date: </label>
              <input
                name="date"
                type="date"
                placeholder="Please select appropriate dates"
                value={formState.endDate}
                onChange={onHandleChangeEnd}
              />

              <label>Destination: </label>
              <input
                name="location"
                type="text"
                placeholder="Please choose destination"
                value={formState.location}
              />

              <label>Event: </label>
              <input
                name="event"
                type="text"
                placeholder="Please choose qn event"
                value={formState.event}
              />
            </div>
          )}
      </fieldset>

      <fieldset>
        <legend className={tripStyle.legend}>3</legend>
        {!clicked && (
          <button disabled={!formState ? true : false} onClick={searchResult} className={!formState ? tripStyle.genBtnNo : tripStyle.genBtn}>
            Generate My Ticket
          </button>
        )}
      
        {clicked && (
          <button onClick={saveUserSelection} className={tripStyle.genBtn}>
            save trip
          </button>
        )}
      </fieldset>
    </div>
  );
};

export default ChosenEvents;
