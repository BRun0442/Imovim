import { StyleSheet } from "react-native"

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    titleContainer: {
        marginVertical: 30,

        paddingHorizontal: 15
    },

    title: {
        fontSize: 22,
        fontWeight: "600"
    },

    form: {
        paddingHorizontal: 15,
    },

    formText: {
        fontWeight: "500",
        fontSize: 18,

        marginVertical: 10
    },

    nameInputs: {
        marginVertical: 15
    },

    inputType1: {
        width: "100%",
        height: 50,

        borderColor: "#A512BD",
        borderWidth: 2,
        borderRadius: 20,

        textAlign: "left",

        paddingStart: 15,
        paddingEnd: 15,

        fontSize: 18,
        fontWeight: "400"
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

        width: "100%",
        height: 200,

        backgroundColor: "#A7A7A7",

        borderRadius: 20
    },

    banner: {
        marginVertical: 15
    },

    button: {
        height: 55,
        width: 200,
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        
        borderRadius: 30,

        backgroundColor: "#FF6709",

        marginTop: "5%",
        marginBottom: "15%",
    },

    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    }
})