import React from 'react';
import { NavLink } from 'react-router-dom';


import './Navigation.css';

const Navigation = () => {
    // return (
    //     <nav>
    //         <ul>
    //             <li><a href="#home">Home</a></li>
    //             <li><a href="#about">About</a></li>
    //             <li><a href="#projects">Projects</a></li>
    //             <li><a href="#contact">Contact</a></li>
    //         </ul>
    //     </nav>
    // );
    return (
        <nav className="navigation">
            <ul className="navigation-home">
                <li><NavLink to="/" activeClassName="activeLink">Sunny</NavLink></li>
            </ul>
            <ul className="navigation-links">
                <li><NavLink exact to="/" activeClassName="activeLink">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="activeLink">About</NavLink></li>
                <li><NavLink to="/skills" activeClassName="activeLink">Skills</NavLink></li>
                <li><NavLink to="/projects" activeClassName="activeLink">Portfolio</NavLink></li>
                <li><NavLink to="/contact" activeClassName="activeLink">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;