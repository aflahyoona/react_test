"use client";
import { useState } from "react";

export default function page() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  function addTask() {
    if (text) {
      if (editIndex === -1) {
        setList([text, ...list]);
      } else {
        const updateList = [...list];
        updateList[editIndex] = text;
        setList(updateList);
        setEditIndex(-1);
      }
    }
    setText("");
  }

  function deleteItem(selectedIndex) {
    setList((previous) =>
      previous.filter((_, index) => selectedIndex !== index)
    );
    setText("");
  }

  function editItem(selectedIndex) {
    setText(list[selectedIndex]);
    setEditIndex(selectedIndex);
  }

  return (
    <div>
      <input
        style={{ border: "2px solid black" }}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button style={{ border: "2px solid black" }} onClick={addTask}>
        {editIndex === -1 ? "add" : "update"}
      </button>

      {list.map((item, index) => (
        <div key={index}>
          <h1>{item}</h1>

          <button
            style={{ border: "2px solid black" }}
            onClick={() => editItem(index)}
          >
            edit
          </button>
          <button
            style={{ border: "2px solid black" }}
            onClick={() => deleteItem(index)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}
