import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",

        backgroundColor: "#FFF"
    },


    imgContainer:{
        width: "100%",
        height: "75%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#D9D9D9"
    },

    iconsContainer:{
        width: "100%",
        height: "20%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },

    iconContainer:{
        width: 70,
        height: 70,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#A512BD",

        borderRadius: 50,

        marginHorizontal: 20
    }
})