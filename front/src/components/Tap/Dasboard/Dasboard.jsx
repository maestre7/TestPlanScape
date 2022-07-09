import React from "react";
import { Link } from 'react-router-dom';

function Dasboard() {

    return (
        <div>
            <Link to={'/1'}> Tap One </Link>
            <hr size="2px" color="black" />
            <Link to={'/2'}> Tap Two </Link>
            <hr size="2px" color="black" />
            <Link to={'/'}> Logout </Link>
        </div>
    )
}

export default Dasboard;