import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
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
        marginBottom: 30
    },

    title: {
        fontSize: 18,
        fontWeight: "600"
    },

    notifications:{
        marginBottom: 20
    }

})