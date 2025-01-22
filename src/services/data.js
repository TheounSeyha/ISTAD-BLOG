// GET ALL PRODUCTS
export async function getAllUser() {
  const data = await fetch(`${import.meta.env.BASE_URL}`).then(
    (response) => response.json()
  );
    // console.log("data", data);
  return data;
}

// GET PRODUCT BY ID
export async function getById(id) {
  const data = await fetch(`${import.meta.env.BASE_URL}/${id}`).then(
    (response) => response.json()
  );
  console.log("data by id", data);
  return data;
}
