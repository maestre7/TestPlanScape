
import React from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button, Image } from "react-native";

/* MSG */
const msg = {
    hola: "HOLA!",
    que: "Que Tal?",
}

function TapMsg({ tap }) {
    return (<View>
            <Text style={styles.tapMsg}>
                {tap === "1" ? msg.hola : msg.que}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tapMsg: {
        flexWrap: "nowrap",
        padding: "5px",
        marginTop: "80px",
        fontWeight: "bold",
        fontSize: "2.9rem",
    }
})

export default TapMsg;