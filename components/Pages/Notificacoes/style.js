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
        alignItems: "center",

        width: "100%",
        height: "10%",

        paddingHorizontal: 10,
    },

    title: {
        fontSize: 18,
        fontWeight: "600"
    },

    notificationTypes:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      
        width: "100%",
        height: "5%",

    },

    notificationTypesButton:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        width: 150,
        height: 50,

        borderRadius: 50
    },

    notificationTypesText:{
        fontSize: 18,
        fontWeight: "bold"
    },

    notifications:{
        width: "100%",

        paddingHorizontal: 10,
        paddingVertical: 20,

        marginVertical: 20
    }

})