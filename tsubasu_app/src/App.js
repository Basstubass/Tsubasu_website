// import { useEffect, useState } from "react"
import './App.css';
import { Routes, Route } from 'react-router-dom';

// import Top_page from './Top_page';
import Body from './Component/Body/Body';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';

// import db from "./firebase";
// import {collection,getDocs, onSnapshot} from "firebase/firestore";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
