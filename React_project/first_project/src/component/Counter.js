import React, { useState } from "react";

export default function Counter() {
    
    const [count, setCount] = useState(0)

    function increment(){
        setCount((prevcount)=>prevcount + 1)
        setCount((prevcount)=>prevcount + 1)
    }
    function decrement(){
        setCount((prevcount)=>prevcount - 1)
        setCount((prevcount)=>prevcount - 1)
    }
  return (
  <div>
    <button className="decrement" onClick={decrement}>-</button>
    {count}
    <button className="increment" onClick={increment}>+</button>
  </div>
  )
}
