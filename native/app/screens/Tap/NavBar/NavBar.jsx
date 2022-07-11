import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

//import logo from "../../../assest/img/3line.png";

function NavBar({ navigation, tap }) {
    
    return (
        <View style={styles.navbar}>
            <Text style={styles.title}> 
                Tap {tap === "0" || "1" ? 1 : 2} 
            </Text>
            <Button title="L" onPress={() => navigation.navigate("Tap", {tap: "0"})}/>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: "50px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px",
    },
    title: {
        fontWeight: "bold",
        fontSize: "1.3rem",
    }
})

export default NavBar;