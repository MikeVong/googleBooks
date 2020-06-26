import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <span id="blue">G</span>
                    <span id="red">o</span>
                    <span id="yellow">o</span>
                    <span id="blue">g</span>
                    <span id="green">l</span>
                    <span id="red">e</span> Books Search</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/home" 
                        className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                        Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" 
                        className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                        Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;