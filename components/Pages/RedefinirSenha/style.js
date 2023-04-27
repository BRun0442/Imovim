import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },

    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        width: "100%",
        height: "10%",

        paddingHorizontal: 10,
    },

    title: {
        fontSize: 18
    },

    button: {
        backgroundColor: "#FF6709",
        width: "50%",
        height: 60,

        borderRadius: 15,
        justifyContent: "center",
        alignSelf: "center",

        marginBottom: 25,
    },

    buttonText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "500",

        textAlign: "center",
    },
})