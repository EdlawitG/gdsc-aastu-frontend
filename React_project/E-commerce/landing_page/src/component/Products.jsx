import React, { useEffect, useState } from "react";
import { Men, Women, Jewerly, Electronics, All } from "./FilteredData.jsx";

function Products({
  showMen,
  showAll,
  showWomen,
  showjewerly,
  showElectronics
}) {
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
      {(() => {
        if (isLoading) {
          return <h1>.....Loading</h1>;
        }
        if (error) {
          return <h1>.....Error Occurred </h1>;
        }
        if (showAll) {
          return <>
          <h1 className="navbar">All Products</h1>
          <All data={data}/>
          </>
        }
        if (showMen) {
          return <>
          <h1 className="navbar">
            Men Clothing
          </h1>
          <Men data={data}/>
          </>
        }
        if (showWomen) {
          return <>
          <h1 className="navbar">
            Women Clothing
          </h1>
          <Women data={data}/>
          </>
        }
        if (showElectronics) {
          return <>
          <h1 className="navbar">
            Electronics
          </h1>
          <Electronics data={data}/>
          </>
        }
        if (showjewerly) {
          return <>
          <h1 className="navbar">
            Jewerly
          </h1>
          <Jewerly data={data}/>
          </>
        }
        else{
          return <All data={data}/>
        }
      })()}
    </div>
  );
}

export default Products;
