import React, { useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
import Home from "./Home";
function Products({ handleClick }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
    setError(false);
    setLoading(false);
  }, []);
  return (
    <div className="products">
      {isLoading ? (
        <p>.....Loading</p>
      ) : (
        data.map((dat) => {
          return (
            <>
              <div className="card">
                <img src={dat.image} alt="" />
                <div className="card-desc">
                  <h5>{dat.title.substring(0, 20)}</h5>
                  <p className="rate">
                    <MdStarRate />
                  </p>
                  <p>
                    <b>{dat.rating.rate}</b>({dat.rating.count})
                  </p>
                </div>
                <div className="card-desc1">
                  <p className="cat">{dat.category}</p>
                  <p className="price">${dat.price}</p>
                </div>
                <div className="btn-pur"><BsFillBagCheckFill className="bag"/><button className="btn-purchase">Purchase Now</button></div>
              </div>
            </>
          );
        })
      )}
    </div>
  );
}

export default Products;
