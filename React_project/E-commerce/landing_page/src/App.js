import './App.css';
import Home from './component/Home';
import Nav from './component/Nav';
import { BrowserRouter as Router  } from 'react-router-dom';
import Products from './component/Products';
function App() {
  return (
    
     <>
     <Router>
     <Nav/>
     <Home/>
     <Products/>
     </Router>
     </> 
  );
}

export default App;
