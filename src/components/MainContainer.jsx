import { Routes, Route } from "react-router-dom";

import Blue from "./Blue.jsx";
import Red from "./Red.jsx";
import Green from "./Green.jsx";
import Pups from "./Pups.jsx";
import Home from "./Home.jsx";

export default function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blue" element={<Blue />}></Route>
        <Route path="/red" element={<Red />}></Route>
        <Route path="/green" element={<Green />}></Route>
        <Route path="/pups" element={<Pups />}></Route>
      </Routes>
    </div>
  );
}
