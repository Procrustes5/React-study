
import { useState } from "react";

function Button() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Hello ({todos.length})</h1>
        <input onChange={onChange} value={todo} type="text" placeholder="Write your to do" />
        <button>App to do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}


export default Button;
