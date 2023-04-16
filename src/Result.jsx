import Pet from "./Pet";

const Result = ({ pets }) => {
  //here the pet is received in form of object  bcs hooks give obj so we are destructuring this
  return (
    <div className="search">
      {!pets.length ? (
        <h1>NO PETS FOUND</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            id={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city},${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};
export default Result;
