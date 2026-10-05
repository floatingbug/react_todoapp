"use client"

import { useState } from "react";
import AddItem from "./components/AddItem.jsx";
import TodoItems from "./components/TodoItems.jsx";


export default function Todolist() {
  // --- state ---
  const [items, setItems] = useState([]);

  // --- actions on items ---
  function addItem(item) {
    const newItem = {
      text: item,
      itemId: crypto.randomUUID(),
    };

    const newItems = [...items, newItem]

    setItems(newItems);
  }

  function removeItem(itemId) {
    const newItems = items
      .filter(item => item.itemId !== itemId);

    setItems(newItems);
  }

  return (
    <div className="todolist">
      <TodoItems
        items={items}
        onRemoveItem={removeItem}
      />

      <AddItem
        onAddItem={addItem}
      />
    </div>
  )
}
