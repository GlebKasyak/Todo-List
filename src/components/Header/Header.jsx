import React from "react";
import { Link } from "react-router-dom";
import { HOME_PAGE, ABOUT_PAGE } from "../../constants/const";

const Header = () => (

    <header className="header">
        <h1>Todo List</h1>
        <Link to={HOME_PAGE}>Home</Link>
        <span>|</span>
        <Link to={ABOUT_PAGE}>About</Link>
    </header>
);

export default Header;