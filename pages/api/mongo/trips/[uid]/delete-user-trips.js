import clientPromise from "../../../../../lib/mongodb";
import { ObjectId } from "bson";

export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db();
    console.log(db)
    const { uid } = req.query;
   
    if (req.method === 'DELETE') {
        const deletedTrips = await db.collection("user_trips").deleteOne({_id: ObjectId(uid)});
        console.log('trips ==>', deletedTrips)
        if(deletedTrips){
            res.status(200).json({deletedTrips, message: 'deleted trip'});
        }
    }
 
};
