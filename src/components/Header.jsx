import React from 'react';

import {Link} from "react-router-dom"
import { ImSearch } from 'react-icons/im';

import logo from "../assets/netflix-logo.png"

import "../styles/Header.scss"

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="netflix-logo" />
            <div>
                {/* <Link to="/tvshows">TV shows</Link>
                <Link to="/tvshows">Movies</Link>
                <Link to="/tvshows">Recently Added</Link>
                <Link to="/tvshows">My List</Link> */}
                <Link>TV shows</Link>
                <Link>Movies</Link>
                <Link>Recently Added</Link>
                <Link>My List</Link>
            </div>
            <ImSearch />
        </nav>
    );
};

export default Header;