import React from "react";
import { View, StyleSheet, Button } from "react-native";

function Dasboard({ navigation }) {

    return (
        <View style={styles.dashboard}>
            <Button
                title="Tap One"
                onPress={() => navigation.navigate("Tap", {tap: "1"})}
            />
            <View style={styles.separator} />
            <Button
                title="Tap Two"
                onPress={() => navigation.navigate("Tap", {tap: "2"})}
            />
            <View style={styles.separator} />
            <Button
                title="Logout"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    dashboard: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "center",
        marginTop: "40px",
        padding: "10px",
        backgroundColor: "darkgray",
        borderRadius: "25px",
    },
    separator: {
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: "80%"
    }
})

export default Dasboard;