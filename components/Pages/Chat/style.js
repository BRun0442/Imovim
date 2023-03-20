import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",

        paddingTop: 15,

        backgroundColor: "#F1F1F1",
        borderRadius: 15
    },

    data: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    camContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        width: 65,
        height: 65,

        borderRadius: 50,

        backgroundColor: "#D9D9D9",

        borderWidth: 2,
        borderColor: "#FF7926"
    },

    dataItems: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        width: 300,
        height: 50,
    },

    name: {
        fontSize: 18,
        fontWeight: "bold"
    },

    message: {
        fontSize: 15
    },

    line:{
        width: "100%",
        height: 1,

        backgroundColor: "#E98AF9",

        marginVertical: 15
    },
})