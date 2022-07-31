import clientPromise from "../../../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db();
  //  const specials = await db.collection("user_experiences").find({}).toArray(function(err, results) {
  //    res.status(200).send(results);
  const specials = await db.collection("user_experiences").find({});
  console.log('specials ----->', specials)
  const specialsArray = await specials.toArray();
  console.log('specialsArray ----->', specialsArray)

  res.status(200).json(specialsArray);
};
