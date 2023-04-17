import React, { useState } from 'react'
import Greet from './Greet'
function Airbnb (){
    // const [greet , setgreet] = useState(false)
    // return(
    //     <div>
    //      <button onClick={()=>setgreet(true)}>Greeeting</button>
    //      {greet&& <Greet/>} 
    //     </div>
    // )
    const [cart,setCart] = useState({
        item:'apple',
        qty:0,
    })
    function increment(){
        setCart(
            prevCart=>({
                ...prevCart,
                qty:prevCart.qty +1
            }))
    }
    function decrement(){
       setCart(
        prevCart=>({
            ...prevCart,
            qty:prevCart.qty-1
        })
       )
    }
    return (
        <div>
          <button className="decrement" onClick={decrement}>-</button>
          {cart.qty}
          {cart.item}
          <button className="increment" onClick={increment}>+</button>
        </div>
        )
}
export default Airbnb