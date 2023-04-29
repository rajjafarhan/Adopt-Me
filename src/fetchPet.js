const fetchPet = async ({ queryKey }) => {
  //see Details.jsx (reactquery)
  //fetchPet is an asynchronous function that takes an object with a queryKey property as its parameter.
  // This function extracts the id value from the queryKey and uses it to fetch data for that specific pet from the API.
  //     (2) ['details', '2']  query key will be received in this form
  // 0:"details"
  // 1:"2"
  // {console.log(queryKey)}/
  const id = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchPet;
