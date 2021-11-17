import { useState } from "react";
// componente que utiliza el estado del input en el componente hijo
import AddTodo from "./Components/AddTodo";

// componente que utiliza el estado del input en el componente padre
import AddTodoSinEstado from './Components/AddTodoSinEstado';
import Todo from "./Components/Todo";

const items = [
  { title: "Hacer las prácticas de tarea", done: false },
  { title: "Ir por una concha con enchilada adentro", done: true },
];

function App() {
  const [todos, setTodos] = useState(items);

  // Ejemplo de uso del estado en el componente padre
  const [text, setText] = useState("");
  // console.log("todos", todos);
  

  const handleClickTodo = (title) => {
    const nuevosElementos = todos.map( (todo) => {
      if (todo.title === title) {
        return {title: title, done: !todo.done}
      }
      return todo
    } )

    setTodos(nuevosElementos)
  }

  const handleAddButton = () => {
    const todoNuevo = {title: text, done: false}
    setTodos([
      ...todos,
      todoNuevo
    ])
    setText('')
  }

  return (
    <div className="App">
      {todos.map((todo) => (
        <div
          key={todo.title}
          onClick={() => handleClickTodo(todo.title)}
        >
          <Todo title={todo.title} done={todo.done} />
        </div>
      ))}
      <AddTodo todos={todos} setTodos={setTodos} />
      <AddTodoSinEstado text={text} setText={setText} handleAddButton={handleAddButton}/>
    </div>
  );
}

export default App;
