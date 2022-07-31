import clientPromise from "../../../../lib/mongodb";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    const client = await clientPromise;
    const db = client.db();
    const { uid } = req.query;
    let user = await db.collection("travelWise_users").findOne({ email: uid });
    if (!user) {
      user = await db
        .collection("travelWise_users")
        .insertOne({ email: uid, name: session.user.name, date: new Date().toLocaleDateString() });
    }
    res.json({ user });
  } else {
    res.json({
      error: "You must sign in to view the protected content on this page.",
    });
  }
};
