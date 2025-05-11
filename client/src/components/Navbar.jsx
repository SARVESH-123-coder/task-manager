import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-danger bg-primary navbar-expand-lg px-4">
      <Link to="/" className="navbar-brand">Task Managment</Link>
      <div className="navbar-nav">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/add" className="nav-link">Add Task</Link>
      </div>
    </nav>
  );
};

export default Navbar;
