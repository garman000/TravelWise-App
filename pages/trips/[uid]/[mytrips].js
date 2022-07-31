import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import UserTripsLayout from "../../../components/userTrips/UserTripsLayout";
import Layout from "../../../components/layout";
import { deleteTrip, getUserTrips } from "../../../lib/trips";
import { useContext, useEffect, useMemo, useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import AuthGoogle from "../../../components/AuthGoogle";
import GlobalContext from "../../../context/GlobalContext";

import style from "../../../styles/userTrips.module.css";
import CardComponent from "../../../components/Card Component/CardComponents";
import Modal from "../../../components/Modal";
import { faSlack } from "@fortawesome/free-brands-svg-icons";

const Profile = (props) => {
  const [currentUser, setCurrentUser] = useAuthContext();
  const { data: session } = useSession();
  const router = useRouter();
  const { username } = router.query;
  const [userTripPersonalInfo, setUserTripPersonalInfo] = useState();
  const { tripInfo } = useContext(GlobalContext);
  const [newTrips, setNewTrips] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (currentUser) {
      getUserTrips(currentUser.user._id)
        .then((response) => response)
        .then((data) => {
          setUserTripPersonalInfo(data);
        });
    } else {
      console.log("no user");
    }
  }, [currentUser, tripInfo]);

  const handleDeleteTrips = async (_id) => {
    console.log("id test again ====>", Object.values(userTripPersonalInfo)[0]);
    // if (currentUser) {
      // setShowModal(true);
      // try {
        setShowModal(true)
        await deleteTrip(_id);
        // alert("Are you sure you want to remove?");
      // } catch (err) {}
    // }
  };

  return (
    <Layout returnHome>
      <div className={style.pageWrapper}>
        {session ? (
          <div className={style.gridContainer}>
            {userTripPersonalInfo &&
              userTripPersonalInfo.userTripsArray.map((data) => (
                // <div className={style.tripCard}>
                <CardComponent
                  origin={data.origin}
                  location={data.location}
                  event={data.event}
                  iframe={data.iframe}
                  eventStartDate={data.eventStartDate}
                  handleDeleteTrips={handleDeleteTrips}
                  tripId={data._id}
                />

                // </div>
              ))}
          </div>
        ) : (
          <div className={style.signInTitle}>
            <h1>You are not currently logged in, log in to continue</h1>
            <AuthGoogle />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
