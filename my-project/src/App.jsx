import React from "react";
import Hero from "./assets/Component/Hero.jsx"; 
import Footer from "./assets/Component/Footer.jsx"; 
import Wishlist from "./assets/Component/Wishlist.jsx";
import Mans from "./assets/Component/Mans.jsx";
import Kids from "./assets/Component/kids.jsx";
import Womens from "./assets/Component/Womens.jsx";
import Cart from "./assets/Component/Cart.jsx";
import SignUp from "./assets/Component/SignUp.jsx";
// import ExampleComponent from "./assets/Component/ExampleComponent.jsx";


// import Action from "./assets/Component/Action.jsx";
// import Caro from "./assets/Component/Caro.jsx";
// import CaroW from "./assets/Component/CaroW.jsx";
import Loging from "./assets/Component/Loging.jsx";
import { BrowserRouter,Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Hero/>} />
{/* <Route path="/Caro" element={<Caro/>} />
<Route path="/CaroW" element={<CaroW/>} /> */}
        <Route path="/Wishlist" element={<Wishlist/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/Loging" element={<Loging/>} />
        <Route path="/Mans" element={<Mans/>} />
        <Route path="/Kids" element={<Kids/>} />
        <Route path="/Womens" element={<Womens/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        {/* <Route path="/ExampleComponent" element={<ExampleComponent/>} /> */}
        {/* <Route path="/Action" element={<Action/>} /> */}
        
       
    
    
      
      </Routes>
     
    </BrowserRouter>
    </>
  );
}

export default App;
