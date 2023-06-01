import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 600,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#FFF"
    },

    loadingImage:{
        width: 60,
        height: 60
    },

    text:{
        fontSize: 18,
        fontWeight: "600",

        marginVertical: 15
    }
})