// import { useEffect, useState } from "react";
// import Result from "./Result";
// import useBreedList from "./useBreedList";
// const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// const Searchparams = () => {
//   const [pets, setPets] = useState([]);
//   const [location, setLocation] = useState("");
//   const [animal, setAnimal] = useState("");
//   const [breed, setBreed] = useState("");
//   const [breeds] = useBreedList(animal);

//   useEffect(() => {
//     requestPets();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   async function requestPets() {
//     const res = await fetch(
//       `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
//     );
//     const json = await res.json();

//     setPets(json.pets);
//   }

//   return (
//     <div className="search-params">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           requestPets();
//         }}
//       >
//         <label htmlFor="location">
//           Location
//           <input
//             id="location"
//             value={location}
//             placeholder="Location"
//             onChange={(e) => setLocation(e.target.value)}
//           />
//         </label>

//         <label htmlFor="animal">
//           Animal
//           <select
//             id="animal"
//             value={animal}
//             onChange={(e) => {
//               setAnimal(e.target.value);
//               setBreed("");
//             }}
//             onBlur={(e) => {
//               setAnimal(e.target.value);
//               setBreed("");
//             }}
//           >
//             <option />
//             {ANIMALS.map((animal) => (
//               <option key={animal} value={animal}>
//                 {animal}
//               </option>
//             ))}
//           </select>
//         </label>

//         <label htmlFor="breed">
//           Breed
//           <select
//             disabled={!breeds.length}
//             id="breed"
//             value={breed}
//             onChange={(e) => setBreed(e.target.value)}
//             onBlur={(e) => setBreed(e.target.value)}
//           >
//             <option />
//             {breeds.map((breed) => (
//               <option key={breed} value={breed}>
//                 {breed}
//               </option>
//             ))}
//           </select>
//         </label>

//         <button>Submit</button>
//       </form>
//       <Result pets={pets} />
//     </div>
//   );
// };

// export default Searchparams;
//this is a browser api u gonna feed in a form it will pull out all the information from it for u


import {  useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Result from "./Result";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const Searchparams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  
  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];


  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData=new FormData(e.target) 
         const obj={
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? ""
         };
         setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input
          name="location"
            id="location"
          
            placeholder="Location"
           
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
             
            }}
           
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            name="breed"
            
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default Searchparams;
