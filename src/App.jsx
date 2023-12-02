
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Dentist from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs"
import { useAppContext } from "./Provider/AppContext";

function App() {
  const { state } = useAppContext()

  return (
  <Router>
        <div className={`App ${state.theme === 'dark' ? 'dark-theme' : 'ligth-theme'}`}>
          <Navbar />
          <Routes>      
          <Route path="/" element={<Navigate to="/home" />} />    
            <Route path="/home" element={<Home />} />
            <Route path="/dentist/:id" element={<Dentist />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer />
        </div>
      
    </Router>
  );
}

export default App;
