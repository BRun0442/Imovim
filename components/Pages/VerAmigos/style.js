import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",

        backgroundColor: "#FFF",
    },

    titleContainer: {
        width: "100%",

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
        width: "100%",
        height: "90%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        paddingHorizontal: 10,

        borderRadius: 15,

        elevation: 4,

        backgroundColor: "#F1F1F1"
    },

    searchInputContainer: {
        width: "100%",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        paddingHorizontal: 5
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
        width: "90%",
        height: 50,

        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        
        paddingHorizontal: 15,
        marginVertical: 15,

        backgroundColor: "#FFF",
    },

    results: {
        width: "100%",

        borderRadius: 25,
    },

})