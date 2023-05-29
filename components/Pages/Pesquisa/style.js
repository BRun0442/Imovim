import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F1F1",
    },

    searchContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        paddingHorizontal: 15,
        marginTop: 15,

        width: "100%",
        height: 50,

        backgroundColor: "#FFF",

        borderRadius: 15
    },

    icon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#FFF",
        width: "10%",
        height: 50,
    },

    searchInput: {
        backgroundColor: "#FFF",
        width: "90%",
        height: 50,

        paddingHorizontal: 15,
    },

    addGroupIcon: {
        backgroundColor: "#FFF",

        width: 35,
        height: 35,

        borderRadius: 30,
    },

    // tags: {
    //     width: "100%",

    //     display: "flex",
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "space-around",

    //     paddingHorizontal: 40,
    //     marginBottom: 20
    // },

    // tag: {
    //     backgroundColor: "#FFF",
    //     padding: 10,

    //     borderRadius: 30,

    //     fontSize: 18
    // },

    results: {
        backgroundColor: "#FFF",
        width: "100%",

        paddingHorizontal: 20,

        borderRadius: 25,
    },
})