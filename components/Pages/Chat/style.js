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

    message:{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",

        width: "100%",
        height: 80,

        backgroundColor: "#F1F1F1",
        borderRadius: 10,

        paddingHorizontal: 20
    },

    camContainer:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        width: 65,
        height: 65,

        borderRadius: 50,

        backgroundColor: "#D9D9D9"
    },

    messageTexts:{
        display: "flex",
        flexDirection: "column",

        marginLeft: 15
    },

    notification:{
        width: 8,
        height: 8,

        borderRadius: 15,

        backgroundColor: "#A512BD"
    },

    messageItems:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        width: 300,
        height: 50,
    }
})