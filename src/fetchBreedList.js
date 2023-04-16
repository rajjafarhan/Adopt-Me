const fetchBreedList = async ({queryKey }) => {
    //fetchPet is an asynchronous function that takes an object with a 
    // queryKey property as its parameter. This function extracts the id value from the 
    // queryKey and uses it to fetch data for that specific pet from the API.

    const animal = queryKey[1];


    if (!animal) return []
    
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
  
    if (!apiRes.ok) {
      throw new Error(`breeds/${animal} fetch not ok`);
    }
  
    return apiRes.json();
  };
  
  export default fetchBreedList;