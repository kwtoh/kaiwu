import React from "react";
import { NavLink } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Nav.css";

// const navStyle = {
//   color: "black",
//   text-decoration: "underline",
// };

const Nav = () => {
  return (
    <>
      <nav>
        <NavLink activeStyle={{ color: "black" }} exact to="/">
          Home
        </NavLink>
        <FiberManualRecordIcon className="nav-divider" />
        {/* <NavLink activeStyle={{ color: "black" }} to="/about">
          About
        </NavLink>
        <FiberManualRecordIcon className="nav-divider" /> */}
        <NavLink activeStyle={{ color: "black" }} to="/creations">
          Creations
        </NavLink>
        {/* <FiberManualRecordIcon className="nav-divider" />
        <NavLink activeStyle={{ color: "black" }} to="/projects">
          Projects
        </NavLink> */}
        <FiberManualRecordIcon className="nav-divider" />
        <NavLink activeStyle={{ color: "black" }} to="/thoughts">
          Thoughts
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
