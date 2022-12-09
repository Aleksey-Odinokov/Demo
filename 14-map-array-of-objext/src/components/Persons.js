import persons from "../data/persons";
import Person from "./Person";

function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => {
        return <Person key={person.Index} {...person} />;
      })}
    </div>
  );
}

export default Persons;
