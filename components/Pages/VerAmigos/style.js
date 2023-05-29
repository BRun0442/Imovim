import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },

    titleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 10,

        marginTop: 20,
    },

    title: {
        fontSize: 18,
        fontWeight: "600",

        marginBottom: 25
    },

    searchContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        paddingHorizontal: 10,
        marginHorizontal: 20,

        borderRadius: 20,

        elevation: 4,

        backgroundColor: "#F1F1F1"
    },

    searchInputContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    iconContainer: {
        width: "10%",
        height: 50,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#FFF",

        borderTopStartRadius: 20,
        borderBottomStartRadius: 20,
    },

    searchInput: {
        backgroundColor: "#FFF",
        height: 50,
        width: "90%",

        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,

        paddingHorizontal: 15,

        marginVertical: 15
    },

    results: {
        backgroundColor: "#F1F1F1",

        marginVertical: 10
    },

})