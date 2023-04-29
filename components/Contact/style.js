import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    messageContainer: {
        marginBottom: 8
    },

    NewMessageContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",

        width: "100%",
        height: 100,

        backgroundColor: "#F1F1F1",
        borderRadius: 15,

        paddingHorizontal: 15
    },

    camContainer: {
        width: "20%",
        height: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    cam:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        width: 65,
        height: 65,

        borderRadius: 50,

        backgroundColor: "#D9D9D9"
    },

    messageTexts: {
        width: "80%",
        height: "100%",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",

        paddingHorizontal: 10
    },
    
    messageItems: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        width: "100%",
        height: 50,
    },

    name:{
        fontSize: 18,
        fontWeight: "bold"
    },

    message:{
        fontSize: 15
    },

    notification: {
        width: 8,
        height: 8,

        borderRadius: 15,

        backgroundColor: "#A512BD"
    },

})