import React from "react";
import { Link } from 'react-router-dom';

import logo from "../../../assest/img/3line.png";

function NavBar(props) {
    const { tap } = props;

    return (
        <div className="navbar">
            <p> Tap {tap === 0 || 1 ? 1 : 2} </p>
            <Link to={'/0'}> 
                <img src={logo} alt="Dashboard" className="modal" />
            </Link>
        </div>
    )
}

export default NavBar;