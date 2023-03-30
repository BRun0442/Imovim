import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        height: "100%",
    },
    
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        paddingStart: 10,
        paddingEnd: 10,
        
        marginTop: 15,
    },

    title: {
        fontSize: 18
    },

    editProfileContainer: {
        marginHorizontal: 8,

        marginTop: 18,
        marginBottom: 15,

        height: "80%",
        backgroundColor: "#F1F1F1",

        borderRadius: 15,

        display: "flex",
        flexDirection: "column",

        paddingTop: 30,
        paddingBottom: 20
    },

    editProfileTitleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",

        paddingLeft: 20,
        marginBottom: 15
    },

    editProfileTitle: {
        fontSize: 16
    },

    editProfile: {
        height: "85%",
        backgroundColor: "#F1F1F1",
        borderRadius: 15,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",

        paddingTop: 30,
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

    lineContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",

        marginVertical: 15
    },

    line: {
        width: "90%",
        height: 2,

        backgroundColor: "#D9D9D9",
    },

    editProfileIconContainerBanner: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },

    editBanner: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: "95%",
        height: 150,

        backgroundColor: "#FFF"
    },

    editProfileIconContainerInput: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",

        paddingBottom: 15
    },

    input:{
        width: "90%",
        height: 40,

        backgroundColor: "#FFF",

        borderRadius: 50,        
        borderColor: "#DA64ED",
        borderWidth: 1,
    }

})