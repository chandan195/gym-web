//  import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Plans from "./components/Plans";
import About from "./components/About";
import Contact from "./components/Contact";
import Trainers from "./components/Trainers";
import Footer from "./components/Footer";
import Details from "./components/Details";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  exact path="/plans" element={<Plans />} />
          <Route  exact path="/about" element={<About />} />
          <Route exact path="/trainers" element={<Trainers />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route  exact path="/details" element={<Details />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

      {/* <main> */}
      {/* <div id="home">
        <Home />
      </div>
      <div id="plans">
        <Plans />
      </div>
      <div id="about">
        <About />
      </div>

      <div id="trainers">
        <Trainers />
      </div>

      <div id="contact">
        <Contact />
      </div> */}
      {/* </main> */}

      {/* <Footer /> */}
    </>
  );
};

export default App;
