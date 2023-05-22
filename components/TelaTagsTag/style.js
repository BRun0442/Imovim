import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    tag: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",

        height: 42,

        margin: 6,
        paddingHorizontal: 15,

        backgroundColor: "#565353",

        borderRadius: 15
    },

    text:{
        fontSize: 20,
        color: "#FFF",
        fontWeight: "500",
    }
})