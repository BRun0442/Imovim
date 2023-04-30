import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 110,

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",

        paddingHorizontal: 15,
        marginBottom: 15,

        borderRadius: 25,

        backgroundColor: '#FFF'
    },

    userInfo:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },

    name:{
        color: "#000",
        fontSize: 16,
        fontWeight: "400",

        marginLeft: 10
    }
})