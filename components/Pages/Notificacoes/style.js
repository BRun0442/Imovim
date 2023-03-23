import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",

        backgroundColor: "#FFF"
    },

    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        paddingStart: 10,
        paddingEnd: 10,

        marginTop: 20,
    },

    title: {
        fontSize: 18,
        fontWeight: "600"
    },

    tags:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },

    tag: {
        width: 150,
        height: 40,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#F1F1F1",

        borderRadius: 25,

        marginHorizontal: 15,
        marginTop: 20
    },

    tagText: {
        fontSize: 16,
        fontWeight: "400"
    },
})