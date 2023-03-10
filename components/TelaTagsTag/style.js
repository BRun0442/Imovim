import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    tag: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",

        width: '35%',
        height: 40,

        margin: 8,
        paddingStart: 8,

        backgroundColor: "#565353",

        borderRadius: 15
    },

    text:{
        fontSize: 20,
        color: "#FFF",
        fontWeight: "500",
    }
})