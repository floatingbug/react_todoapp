"use client";

import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [item, setItem] = useState("");

  function handleChange(event) {
    setItem(event.target.value);
  }

  function addItem() {
    if (item === "") return;

    onAddItem(item)
    setItem("");
  }


  return (
    <div className="add-item">
      <input
        type="text"
        name="item"
        value={item}
        onChange={handleChange}
      />

      <button type="button"
        onClick={addItem}
      >
        add todo
      </button>
    </div>
  );
}
