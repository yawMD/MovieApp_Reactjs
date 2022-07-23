import React from 'react';
import "./NavBar.css";

const NavBar = () =>{
    return (
        <div className="header">
        <nav>
        <div id="logo">
        <img src="https://s1.bunnycdn.ru/assets/template_1/style_2/images/logo.png"  width="40px" height="40px" alt="logo" />
        <h2>fBox.to</h2>
        </div>
        <ul>
        <li><a>Home</a></li>
        <li><a>Movies</a></li>
        <li><a>Tv Shows</a></li>
        <li><a>Top IMDb</a></li>
        </ul>
        </nav>
        </div>
    )
}

export default NavBar;