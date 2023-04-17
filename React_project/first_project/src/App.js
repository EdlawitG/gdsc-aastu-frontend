import "./App.css";
import Home from "./Compoments/Home";
// import Greet from "./component/Greet";
// import Page from "./component/ReactInfoSite";
// import Airbnb from "./component/airbnb";
// import Counter from "./component/Counter";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import DataFetching from "./component/DataFetching";
// import Comp1 from "./Comp1";
import InputField from "./Compoments/InputField/InputFiled";
import Todo from "./Compoments/Todo/Todo.js";
import React, { useState } from "react";

function App() {
 
  
  return (
    // <div className="App">
    // {/* <Page name="Was"/>
    // <Page name="Were"/> */}
    //   {/* <Airbnb/> */}
    //   {/* <Counter/> */}
    //   {/* <Router>
    //     <Routes>
    //       <Route path='/home' element={<Page/>}/>
    //     </Routes>
    //     </Router> */}
    //   {/* <DataFetching/> */}
    //   <Comp1 />
    // </div>
    //Todolist App
   /* <>
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
    </>*/
    <>
    <Home/>
    </>
  );
}

export default App;
