import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles.css'
//PAGES
import Home from "../pages/Home";
import { Navbar } from "./components/navbar";
function App() {



  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
