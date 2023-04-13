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

        width: "100%",
        height: "10%",

        paddingHorizontal: 10,
    },

    title: {
        fontSize: 18,
        fontWeight: "600"
    },

    notifications:{
        width: "100%",

        paddingHorizontal: 20,
        paddingVertical: 20,
    }

})