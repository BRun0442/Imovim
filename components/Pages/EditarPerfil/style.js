import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        height: "110%",

        paddingHorizontal: 10,
    },

    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        width: "100%",
        height: "10%",
    },

    title: {
        fontSize: 18
    },

    editProfileContainer: {
        width: "100%",
        height: "75%",
        backgroundColor: "#F1F1F1",

        borderRadius: 15,

        display: "flex",
        flexDirection: "column",

        paddingVertical: 20
    },

    editProfileTitleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",

        paddingHorizontal: 15,
    },

    editProfileTitle: {
        fontSize: 17,
        fontWeight: "450",

        marginVertical: 10
    },

    editProfileIconContainerPhoto: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },

    editPhoto: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: 160,
        height: 160,
        borderRadius: 150,

        backgroundColor: "#FFF"
    },

    editProfileNameContainerInput: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",

        paddingHorizontal: 15
    },

    lineContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",

        paddingHorizontal: 20,
        paddingVertical: 20
    },

    line: {
        width: "100%",
        height: 2,

        backgroundColor: "#D9D9D9",
    },

    editProfileIconContainerBanner: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",

        paddingHorizontal: 15
    },

    editBanner: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: "100%",
        height: 180,

        backgroundColor: "#FFF"
    },

    editProfileIconContainerInput: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",

        paddingHorizontal: 15
    },

    input: {
        width: "100%",
        height: 40,

        backgroundColor: "#FFF",

        borderRadius: 45,
        borderColor: "#DA64ED",
        borderWidth: 1,

        paddingHorizontal: 15,

        fontSize: 16,
        fontWeight: "450"
    },
})