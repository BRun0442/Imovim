import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    result: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        marginVertical: 10
    },

    photoUser: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        width: 90,
        height: 90,

        borderRadius: 50,

        backgroundColor: "#D9D9D9",

        marginRight: 15
    },

    resultText:{
        fontWeight: "bold",
        fontSize: 18
    }
})