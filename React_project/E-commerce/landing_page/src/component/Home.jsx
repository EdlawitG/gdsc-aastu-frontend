import React from "react";
import person from "./bgWoman.jpg";
function Home({handleClick}) {
  return (
    <div className="main">
      <div className="sub-main">
        <img className="card-img" src={person} alt="background" />
        <div className="discount">
          <h1>Online Only</h1>
          <h2 className="off">20% off</h2>
          <h1 className="purchase">purchase of $ 65+</h1>
          <h6>Code: Sweet23</h6>
        </div>
        <div className="btn-div">
          <button className="btn">Shop Now</button>
        </div>
      </div>
      <div className="btn-filter">
        <button onClick={handleClick}>All</button>
        <button>Men's Clothing</button>
        <button>Jewerly</button>
        <button>Electronics</button>
        <button>Women's Clothing</button>
      </div>
    </div>
  );
}

export default Home;
