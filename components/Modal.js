import React, { useEffect, useState } from "react";
import Image from "next/image";

import style from "../styles/Modal.module.css";
import { deleteTrip } from "../lib/trips";

const Modal = ({ closeModal, handleDeleteTrips, tripId }) => {
//   const { handleDeleteTrips } = props;
  const [showModal, setShowModal] = useState(false);


  const deleteTrip = async () => {
      await handleDeleteTrips(tripId);
      closeModal(false);
      alert('Your trip has been removed permanantly')
    };

    useEffect(() => {
    // handleDeleteTrips(tripId)
    // deleteTrip()
  }, [handleDeleteTrips, deleteTrip])

  return (
    <div className={style.modalBackground}>
      <div className={style.modalContainer}>
        <div className={style.titleCloseBtn}>
          <button onClick={() => closeModal(false)}>❌</button>
        </div>
        <div className={style.title}>
          <h1>Are you sure you want to delete?</h1>
        </div>
        <div className={style.footer}>
          <button className={style.close} onClick={() => closeModal(false)}>
            Close
          </button>
          <button className={style.close} id="cancelBtn" onClick={deleteTrip}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
