export async function getDateUntilTrip (dataObject) {
     return await fetch(`/api/mongo/trips/timeUntilTrip`, {
        method: "POST",
        body: JSON.stringify(dataObject)
    }).then((response) => response.json());
  }
  
