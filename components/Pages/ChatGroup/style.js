import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 15,

        height: "95%",

        paddingHorizontal: 10,
        paddingVertical: 10,

        backgroundColor: "#FFF",
    },

    chat: {
        display: "flex",
        flexDirection: "column",

        height: "98%",

        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#F1F1F1"
    },

    data: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        width: "100%",
        height: "10%"
    },

    infoUser: {
        display: "flex",
        justifyContent: "center",
        marginLeft: 10
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

        width: "100%",
    },

    dataUser: {
        display: "flex",
        flexDirection: "row"
    },

    name: {
        fontSize: 18,
        fontWeight: "bold"
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: 50,
        height: 50,

        borderRadius: 25,

        backgroundColor: "#8B04A2",
    },

    actionsContainer: {
        width: 200,
        height: 100,

        backgroundColor: "#8B04A2",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",

        borderRadius: 22,

        position: "absolute",
        right: 0,

        zIndex: 5
    },

    actionsButton: {
        display: "flex",
        justifyContent: "center",
    },

    textButton: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "600"
    },

    closeIcon: {
        display: "flex",
        justifyContent: "center",

        height: 150,
    },

    lineButtons: {
        borderWidth: 1,
        borderColor: "#E98AF9",

        marginVertical: 5
    },

    line: {
        width: "100%",
        height: 1,

        backgroundColor: "#E98AF9",

        marginVertical: 15,

        zIndex: 0
    },

    messages: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    },

    inputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        width: "100%",
        height: "10%",

        marginBottom: 40
    },

    input: {
        width: "85%",
        height: 50,
        backgroundColor: "#FFF",

        paddingLeft: 15,
    },

    chatInput: {
        width: "100%",

        borderWidth: 1,
        borderColor: "#000",
    },

    sendMessage: {
        width: 40,
        height: 40,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 50,

        backgroundColor: "#FF7926",

        marginLeft: 10,
    },
})