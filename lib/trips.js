export async function addUserTrips (trips) {
    return await fetch(`/api/mongo/trips/add-user-trips`, {
        method: "POST",
        body: JSON.stringify(trips)
    }).then((response) => response.json());
  }

  export async function getUserTrips (userId) {
    return await fetch(`/api/mongo/trips/get-user-trips`, {
        method: "POST",
        body: JSON.stringify(userId)
    }).then((response) => response.json());
  }
  
  export async function deleteTrip(_id){
    console.log('id tester BE ===>', _id)
    return await fetch(`/api/mongo/trips/${_id}/delete-user-trips`, {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json());
}

