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

        paddingStart: 10,
        paddingEnd: 10,

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
        
        padding: 15,
        marginHorizontal: 20,     
        marginBottom: 200,
        borderRadius: 20,

        backgroundColor: "#F1F1F1"
    },

    searchInput: {
        backgroundColor: "#FFF",
        height: 45,
        width: "100%",
        borderRadius: 50,

        paddingHorizontal: 15,
        marginTop: 15,
        marginBottom: 20,
    },  

    results: {
        paddingHorizontal: 15,
        backgroundColor: "#F1F1F1",

        marginVertical: 10
    },

})	