import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF7926",

        display: "flex",
        justifyContent: "space-between",

        paddingVertical: 20
    },

    titleContainer: {
        paddingLeft: 20
    },

    title: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold"
    },

    dataContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    dataContainerImage: {
        width: 120,
        height: 120,
        borderRadius: 100
    },

    dataContainerText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "600",

        marginTop: 10,
        marginBottom: 20
    },

    containerItems: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    items: {
        width: 220,
        height: 45,

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",

        paddingHorizontal: 25,

        marginBottom: 15,

        backgroundColor: "#CB5106",

        borderRadius: 30
    },

    itemText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "500",

        marginLeft: 15
    },

    exitContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    exit: {
        width: 220,
        height: 45,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#8B04A2",

        borderRadius: 40
    },

    exitText: {
        fontSize: 20,
        color: "#FFF",
        fontWeight: "500",

        marginLeft: 10
    }
})