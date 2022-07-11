
import React from "react";
import { SafeAreaView } from "react-native";

import NavBar from "./NavBar/NavBar";
import TapMsg from "./TapMsg/TapMsg";
import Dasboard from "./Dasboard/Dasboard";

function Tap( { navigation, route } ) {
    const { tap } = route.params;
    
    return (<SafeAreaView>
        <NavBar navigation={navigation} tap={tap} />
        {tap === "0" ? 
            <Dasboard navigation={navigation} /> : 
            <TapMsg tap={tap} />}       
    </SafeAreaView>
    )
}

export default Tap;