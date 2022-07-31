export async function getUserByEmail(email) {
    return await fetch(`/api/mongo/users/${email}`).then((response) => response.json());
  }