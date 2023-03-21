import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        borderRadius: 15
    },

    chat: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",

        width: "100%",
        height: "100%",

        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#F1F1F1"
    },

    data: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        width: "100%",
        height: "10%"
    },

    camContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        width: 65,
        height: 65,

        borderRadius: 50,

        backgroundColor: "#D9D9D9",

        borderWidth: 2,
        borderColor: "#FF7926"
    },

    dataItems: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        width: 300,
        height: 50,
    },

    name: {
        fontSize: 18,
        fontWeight: "bold"
    },

    message: {
        fontSize: 15
    },

    line: {
        width: "100%",
        height: 1,

        backgroundColor: "#E98AF9",

        marginVertical: 15
    },

    chatContainer:{
        height: "80%"
    },

    messages: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    },

    inputContainer: {
        height: "5%"
    },

    input: {
        width: "85%",
        height: 50,
        backgroundColor: "#FFF",

        paddingLeft: 15
    },

    chatInput: {
        width: "100%",

        borderWidth: 1,
        borderColor: "#000",

        marginTop: 10
    }
})