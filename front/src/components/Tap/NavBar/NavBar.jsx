import React from "react";
import { Link } from 'react-router-dom';

import googleLogo from "../../../assest/img/logoGoogle.svg";

function NavBar(props) {
    const { tap } = props;

    return (
        <div className="NavBar">
            <p> Tap {tap === 0 || 1 ? 1 : 2} </p>
            <Link to={'/0'}> 
                <img src={googleLogo} alt="Dashboard"/>
            </Link>
        </div>
    )
}

export default NavBar;