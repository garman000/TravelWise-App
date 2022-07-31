import { getSession } from "next-auth/react";
import clientPromise from "../../../../lib/mongodb";

export default async (req, res) => {
  const tripBody = JSON.parse(req.body);
  const client = await clientPromise;
  const db = client.db();
  let trip = await db.collection("user_trips").insert(tripBody);
  
  res.json({ trip });
 
};
