import { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, setName] = useState("");

  return (
    <div className="AddPlayerForm">
      <p>
        New player:
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
            props.addPlayer(name);
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
}
