import React from "react";
import Navbar from '../src/Component/Navbar'
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import EngeeniringAdmission from "./Component/EngeeniringAdmission";
import Managment from "./Component/Managment";
import Madical from "./Component/Madical";
import Footer from "./Component/Footer";
import ContactUs from "./Component/ContactUs";
import About from "./Component/About";
import DirectAdmission from "./Component/DirectAdmission";
function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/EngeeniringAdmission" element={<EngeeniringAdmission/>}/>
        <Route path="/managemnet" element={<Managment/>}/>
        <Route path="/madical" element={<Madical/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/directadmission" element={<DirectAdmission/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;














