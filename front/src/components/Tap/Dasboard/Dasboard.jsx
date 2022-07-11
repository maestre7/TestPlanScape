import React from "react";
import { Link } from 'react-router-dom';

function Dasboard() {

    return (
        <div className="dashboard">
            <Link to={'/1'} className="link"> Tap One </Link>
            <hr color="black" width="80%" />
            <Link to={'/2'} className="link"> Tap Two </Link>
            <hr  color="black" width="80%" />
            <Link to={'/'} className="link"> Logout </Link>
        </div>
    )
}

export default Dasboard;