import { useState } from "react";
import "./App.css";
import InputField from "./Compoments/InputField/InputFiled";
import Todo from "./Compoments/Todo/Todo";
function App() {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([]);

  return (
    <>
       <h1 className="head">TODO LIST</h1>
      <div className="List">
        <InputField
          value={value}
          setValue={setValue}
          todo={todo}
          setTodo={setTodo}
        />
        <Todo todo={todo} setTodo={setTodo} />
      </div>
      </>
  );
}

export default App;
