import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },

    topBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",


        backgroundColor: "#F8670E",
        marginHorizontal: 15,
        marginTop: 20,

        height: 50,
        borderRadius: 30
    },

    topBarText: {
        marginLeft: 5,

        color: "#FFF",
        fontWeight: "bold",
        fontSize: 25
    },

    searchContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#F1F1F1",
        marginTop: 15,
        paddingHorizontal: 2,

        height: 80,
    },

    searchInput: {
        backgroundColor: "#FFF",
        height: 40,
        width: "80%",
        borderRadius: 50,

        paddingHorizontal: 15,
        marginRight: 10
    },

    addGroupIcon: {
        backgroundColor: "#FFF",

        width: 35,
        height: 35,

        borderRadius: 30,
    },

    messageContainer:{
        marginTop: 20
    },
})