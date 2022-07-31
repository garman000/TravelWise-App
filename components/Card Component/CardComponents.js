import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import AuthGoogle from "../AuthGoogle";
import Modal from "../Modal";

import style from "../../styles/userTrips.module.css";
import tripStyle from "../../styles/Trip.module.css";

const CardComponent = (props) => {
  const {
    origin,
    location,
    event,
    iframe,
    eventStartDate,
    tripId,
    handleDeleteTrips,
  } = props;
  const [currentUser, setCurrentUser] = useAuthContext();
  const [openModal, setOpenModal] = useState(false);

  // const deleteHandler = async () => {
  //   setOpenModal(true);
  //   try {
  //     await props.handleDeleteTrips(tripId);
  //     setOpenModal(false)
  //   } catch {}
  // };

  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.cardHeader}>
            <iframe
              src={iframe}
              width="400"
              height="200"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
                  </div>

          <div className={style.cardBody}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span className={style.tagTeal}>{event}</span>
              <h4>{location}</h4>
            </div>
            <div className={style.user}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <AuthGoogle ticketCard />
                <div className={style.userInfo}>
                  <h5>Origin: {origin}</h5>
                  <h5>Start: {eventStartDate}</h5>
                </div>
              </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
              <button
                className={tripStyle.genBtn}
                // onClick={() => props.handleDeleteTrips(tripId)}
                onClick={() => setOpenModal(true)}
                // onClick={deleteHandler}
              >
                Delete
              </button>
              <button className={tripStyle.genBtn}>Update</button>
            </div>
            {openModal && (
              <Modal
                closeModal={setOpenModal}
                tripId={tripId}
                handleDeleteTrips={handleDeleteTrips}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
