import style from "../../styles/Trip.module.css";
import { specialTrips } from "../../lib/utilityData";

const GoogleIframe = () => {
 
  return (
    <>
      {specialTrips &&
        specialTrips.map((value) => (
          <div className={style.google}>
            <iframe
              src={value.iframe}
              width="600"
              height="400"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ))}
    </>
  );
};

export default GoogleIframe;
