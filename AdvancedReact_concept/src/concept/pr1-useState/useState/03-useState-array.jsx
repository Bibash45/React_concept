import { useState } from "react";
import { data } from "../../../data.js";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearAllItems = () => {
    setPeople([]);
  };
  return (
    <div>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}

      <button
        className="btn"
        type="button"
        style={{ marginTop: "2rem" }}
        onClick={clearAllItems}
      >
        Clear Items
      </button>
    </div>
  );
};

export default UseStateArray;
