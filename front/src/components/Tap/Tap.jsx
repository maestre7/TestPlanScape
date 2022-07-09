
import React from "react";
import NavBar from "./NavBar/NavBar";
import TapMsg from "./TapMsg/TapMsg";
import Dasboard from "./Dasboard/Dasboard";


function Tap() {
    let { id } = useParams();

    return (<>
        <NavBar tap={id} />
        {id === 0 ? <Dasboard /> : <TapMsg tap={id} />}       
    </>
    )
}

export default Tap;