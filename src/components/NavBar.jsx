import { Link } from "react-router-dom";

import Blue from "./Blue.jsx";
import Red from "./Red.jsx";
import Green from "./Green.jsx";
import Pups from "./Pups.jsx";

import Home from "./Home.jsx";

export default function NavBar() {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/green">Green</Link>
      <Link to="/pups">Pups</Link>
    </div>
  );
}
