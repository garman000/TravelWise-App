export async function getDateUntilTrip (specialExperiences) {
    return await fetch(`/api/mongo/trips/experiences`, {
       method: "POST",
       body: JSON.stringify(specialExperiences)
   }).then((response) => response.json());
 }
 
