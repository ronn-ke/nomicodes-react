import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Services from './Services';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       
       <Route path="/" element={<Home />} />
       <Route path="/About" element={<About/>}/>
       <Route path='/Services' element={<Services/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Signup' element={<Signup/>}/>
       
    </Routes>
    </BrowserRouter>
  )
}

export default App