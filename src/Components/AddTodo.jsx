import React, { useState } from "react";

const AddTodo = ({todos, setTodos}) => {
  const [text, setText] = useState("");
  // console.log('textFuera:', text)

  const handleInput = (event) => {
    setText(event.target.value)
  }

  const handleButton = () => {
    const todoNuevo = {title: text, done: false}
    setTodos([
      ...todos,
      todoNuevo
    ])
    setText('')
  }

  // [1, 2, 3]
  // [...[1, 2, 3], 4] == [1, 2, 3, 4]

  return (
    <div>
      Agregar:
      <input
        type="text"
        value={text}
        onChange={handleInput}
      />
      <button onClick={handleButton}>Agregar</button>
    </div>
  );
};

export default AddTodo;
