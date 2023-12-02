import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../Provider/AppContext";
import logo from "../Components/images/DH.ico"

const Navbar = () => {
  const { state, dispatch } = useAppContext();

  const handleToggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav>
      <div>
        <img src={logo} alt="logo"/>
      </div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
      </div>
      <div>
        <button className="navButton" onClick={handleToggleTheme}>
          {state.theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
