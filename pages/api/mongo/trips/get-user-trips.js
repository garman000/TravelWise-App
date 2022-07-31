import { getSession } from "next-auth/react";
import clientPromise from "../../../../lib/mongodb";

export default async (req, res) => {
  const userId = JSON.parse(req.body);
  const client = await clientPromise;
  const db = client.db();
  let userTrips = await db.collection("user_trips").find({ userId });
  const userTripsArray = await userTrips.toArray();
//   let newUserData = userId === userTripsArray.userId;


  res.status(200).json({userTripsArray});
};
