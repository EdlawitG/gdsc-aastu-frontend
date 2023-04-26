import "./App.css";
import Home from "./component/Home";
import Nav from "./component/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import Products from "./component/Products";
import { useState } from "react";
function App() {
  const [showAll, setAll] = useState(false);
  const [showMen, setMenCloth] = useState(false);
  const [showWomen, setWomenCloth] = useState(false);
  const [showjewerly, setJewerly] = useState(false);
  const [showElectronics, setElectronics] = useState(false);
  return (
    <>
      <Router>
        <Nav />
        <Home
          setAll={setAll}
          setMenCloth={setMenCloth}
          setElectronics={setElectronics}
          setJewerly={setJewerly}
          setWomenCloth={setWomenCloth}
        />
        <Products
          showAll={showAll}
          showMen={showMen}
          showWomen={showWomen}
          showjewerly={showjewerly}
          showElectronics={showElectronics}
        />
      </Router>
    </>
  );
}

export default App;
