import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import {Header} from './Header';
import {Home} from "./Home";
import {Basket} from "./Basket"
import React from "react"

function App() {
  return (
    <div className="App">
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<><Header/><Home/></>}/>
       <Route path="/checkout" element={<><Header/><Basket/></>}/>
       {/* <Route path="/login" element={<h1>login</h1>}/> */}
      
     </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;


/* <BrowserRouter>
        <Routes>
        <Route path="/" element={<Assignment/>}/>
        <Route path="/2" element={<Assignment2/>}/>
        <Route path="/3" element={<Assignment3/>}/>
        </Routes>
      </BrowserRouter>
       */