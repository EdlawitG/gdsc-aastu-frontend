import react, { useState } from "react";
import React from "react";

// export default function Greet() {
//     function clickHandler(){
//         console.log('Button Clicked')
//         document.body.style.backgroundColor = "Blue"
//     }
//     function changeHandler(event){
//         console.log(event.target.value)
//     }
//   return(
//     <>
//     <button onClick={clickHandler}>Click</button>
//     <input type="text" onChange={changeHandler}/>
//     </>
//   )
// }

function Greet (){
    // return <><h1>Its Me Edlawit</h1></>
    const [arr ,setArr] = useState([])
    function addPlus(){
      setArr(prevArr=>[...prevArr,"+"])
    }
    function addMinus(){
      setArr(prevArr=>[...prevArr,"-"])
    }
    return(
      <>
      <button onClick={addPlus}>+</button>
      <button onClick={addMinus}>-</button>
      {arr}
      </>
    )
}
/*rewriting the above code in es6 form*/
// const Greet = ()=> <h1>Its Me Edlawit</h1>
//allow as to import with any name
// export default Greet
//named export imported as the same name defined here
// export const Greet = ()=> <h1>Its Me Edlawit</h1>      
export default Greet