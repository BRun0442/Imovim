import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",

        backgroundColor: "#FFF"
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
        marginBottom: 20,

        paddingHorizontal: 2,

        height: 80,
    },

    iconContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#FFF",

        width: 40,
        height: 40,

        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },

    searchInput: {
        backgroundColor: "#FFF",
        height: 40,
        width: "70%",

        marginRight: 10,

        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },

    addGroupIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#FFF",

        width: 40,
        height: 40,

        borderRadius: 30,
    },
})