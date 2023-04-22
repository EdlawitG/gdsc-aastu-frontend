import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import "./InputField.css";
import { FaPlusCircle } from "react-icons/fa";
// Import the necessary style file here
function InputField({value,setValue,todo,setTodo}) {
  return (
    <form className="InputField" onSubmit={e =>{
      e.preventDefault();
      setTodo([...todo,{id:uuidv4(), title:value}])
      setValue('');
    }}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="add">
        <FaPlusCircle className="icon-add" />
        Add
      </button>
    </form>
  );
}

export default InputField;
// Create your the component funtion and
// Don't forget to export it!
