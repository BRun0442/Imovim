import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },

    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        marginVertical: 20,

        paddingHorizontal: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: "600"
    },

    addButton:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    searchPeople:{
        backgroundColor: "#F1F1F1",
        paddingHorizontal: 8,

        borderRadius: 15,

        height: "85%",

        marginBottom: 15,

        elevation: 5,
    },

    searchContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        marginVertical: 15,
        paddingHorizontal: 5,
    },

    icon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#FFF",
        width: "10%",
        height: 45,
    },

    searchInput: {
        backgroundColor: "#FFF",
        width: "90%",
        height: 45,

        paddingHorizontal: 15,
    },

    addGroupIcon: {
        backgroundColor: "#FFF",

        width: 35,
        height: 35,

        borderRadius: 30,
    },

    tags: {
        width: "100%",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",

        paddingHorizontal: 40,
        marginBottom: 20
    },

    tag: {
        backgroundColor: "#FFF",
        padding: 10,

        borderRadius: 30,

        fontSize: 18
    },

    results: {
        backgroundColor: "#FFF",
        width: "100%",

        paddingHorizontal: 5,

        borderRadius: 25,
    },
})