import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    memberInfo:{
        width: "50%",

        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",

        marginVertical: 5
    },

    friendMessage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",

        backgroundColor: "#530260",
        padding: 15,

        marginBottom: 5,

        borderRadius: 20,

        width: "70%",
    },

    friendMessageText: {
        color: "#FFF",
    },

    iconCam: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#D9D9D9",

        width: 40,
        height: 40,

        borderWidth: 1,
        borderColor: "#FF7926",

        borderRadius: 50
    },

    nameUser:{
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 10
    },

    hour:{
        fontSize: 14,
        color: "#909090"
    }
})