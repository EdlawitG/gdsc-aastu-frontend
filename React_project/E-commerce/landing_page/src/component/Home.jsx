import React from "react";
import person from "./bgWoman.jpg";

function Home({
  setAll,
  setMenCloth,
  setElectronics,
  setJewerly,
  setWomenCloth,
}) {
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

        <button
          onClick={() => {
            setAll(true);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setMenCloth(true);
            setAll(false);
            setElectronics(false);
            setWomenCloth(false);
            setJewerly(false);
          }}
        >
          Men's Clothing
        </button>
        <button
          onClick={() => {
            setJewerly(true);
            setMenCloth(false);
            setAll(false);
            setElectronics(false);
            setWomenCloth(false);
          }}
        >
          Jewerly
        </button>
        <button
          onClick={() => {
            setElectronics(true);
            setJewerly(false);
            setMenCloth(false);
            setAll(false);
            setWomenCloth(false);
          }}
        >
          Electronics
        </button>
        <button
          onClick={() => {
            setWomenCloth(true);
            setJewerly(false);
            setMenCloth(false);
            setAll(false);
            setElectronics(false);
          }}
        >
          Women's Clothing
        </button>
      </div>
    </div>
  );
}

export default Home;
