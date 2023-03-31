import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    event: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",

        width: "90%",
        height: 35,

        margin: 10,
        marginHorizontal: 15,
        paddingLeft: 10,

        backgroundColor: "#FFF",
        borderRadius: 15
    },

    eventText :{
        fontSize: 18,
        color: "#000",
    }
})