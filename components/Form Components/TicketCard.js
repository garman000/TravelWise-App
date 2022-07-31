import { useContext } from "react";
import { useSession } from "next-auth/react";

import GlobalContext from "../../context/GlobalContext";
import AuthGoogle from "../AuthGoogle";

import ticketStyles from "../../styles/TicketCard.module.css";


const TicketCard = () => {
  const { kayak, value, formState, skyscanner, tripInfo, newValue } =
    useContext(GlobalContext);
  const { data: session } = useSession();

  return (
    <>
      {skyscanner && kayak && (
        <fieldset>
          <legend>Your Virtual Ticket is here </legend>
          <iframe src={formState.iframe} className={ticketStyles.google}></iframe>
          <div className={ticketStyles.ticketContainer}>
            <div className={ticketStyles.counter}>
              <p>{tripInfo}</p>
              <p>days</p>
            </div>

            <div className={ticketStyles.ticket}>
              <div className={ticketStyles.ticketProfile}>
                <div className={ticketStyles.ticketProfileTop}>
                  <div className={ticketStyles.ticketProfileTopText}>
                    <div className={ticketStyles.boardingCtl}>
                      BOARDING PASS
                    </div>

                    <div style={{ borderTop: "1px solid white" }}></div>
                    <div className={ticketStyles.keyControl}>
                      NAME:
                      <div className={ticketStyles.valueControl}>
                        {session.user.name}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "flex-end",
                      }}
                    >
                      <AuthGoogle ticketCard />

                      <div className={ticketStyles.locationCtl}>
                        <div className={ticketStyles.airportCodes}>
                          {newValue} ✈️ {formState.airportCode}
                        </div>
                        <div className={ticketStyles.keyControl}>
                          EVENT:
                          <div className={ticketStyles.valueControl}>
                            {formState.event}
                          </div>
                        </div>
                      </div>
                    </div>

                    <a href={skyscanner} target="_blank">
                      <button className={ticketStyles.flightBtn}>
                        skyscanner
                      </button>
                    </a>
                    <a href={kayak} target="_blank">
                      <button className={ticketStyles.flightBtn}>kayak</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className={ticketStyles.ticketNumberWrapper}>
                <div className={ticketStyles.ticketNumber}></div>
              </div>
            </div>
          </div>
        </fieldset>
      )}
    </>
  );
};

export default TicketCard;
