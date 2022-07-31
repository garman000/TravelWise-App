import Layout from "../layout";
import style from "../../styles/userTrips.module.css";

const UserTripsLayout = ({ origin, location, event }) => {
  return (
    <>
      <div className={style.gridContainer}>
        {/* <div className={style.tripCard}> */}
          <div><span style={{fontSize: "2rem"}}>Event:</span> {event}</div>
          <div>Origin: {origin}</div>
          <div>Location: {location}</div>
        {/* </div> */}
      </div>
    </>
  );
};
export default UserTripsLayout;
