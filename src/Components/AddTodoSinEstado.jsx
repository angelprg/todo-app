import React from "react";

const AddTodoSinEstado = ({text, setText, handleAddButton}) => {
  // const [text, setText] = useState("");

  const handleInput = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      Agregar:
      <input
        type="text"
        value={text}
        onChange={handleInput}
      />
      <button onClick={handleAddButton}>Agregar</button>
    </div>
  );
};

export default AddTodoSinEstado;
