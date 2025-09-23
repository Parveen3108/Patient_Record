import './App.css'
import { Routes, Route } from "react-router-dom";

import Navbaar from "./Pages/Navbaar"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Patient from './Pages/Patient';
import PatientDetils from './Pages/PatientDetails';
function App() {

  return (
    <div className='md:mx-10'>
     <Navbaar/>
     <Patient/>
     <PatientDetils/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/PatientDetils" element={<PatientDetils />} />
      </Routes>
    </div>
  )
}

export default App
