import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    memberInfo:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },

    friendMessage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",

        backgroundColor: "#530260",
        padding: 15,

        marginBottom: 5,

        borderRadius: 20,
    },

    friendMessageText: {
        color: "#FFF",
    },

    iconCam: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#D9D9D9",

        width: 60,
        height: 60,

        borderWidth: 1,
        borderColor: "#FF7926",

        borderRadius: 50
    }
})