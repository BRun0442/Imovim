import { StyleSheet } from "react-native"

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
    },

    iconContainer: {
        width: 200,
        height: 55,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",

        paddingHorizontal: 25,
        marginTop: 25,

        borderRadius: 30,

        backgroundColor: "#FF6709",
    },

    postContainer: {
        width: "100%",
        height: 50,

        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 15,

        marginTop: 25,
        marginBottom: 25
    },

    form: {
        width: "100%",
        
        paddingHorizontal: 15,
    },

    formText: {
        fontWeight: "500",
        fontSize: 18
    },

    dataInputs: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",

        marginBottom: 15,
        marginTop: 15
    },

    nameInputs: {
        marginTop: 15,
    },
    
    horaInputs: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",

        marginVertical: 15,
    },

    locationInput: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        paddingHorizontal: 5
    },

    profileName: {
        fontWeight: "500",
        marginLeft: 8,
        fontSize: 16
    },

    postDate: {
        fontWeight: "300",
    },

    inputType1: {
        width: "100%",
        height: 50,

        borderColor: "#A512BD",
        borderWidth: 2,
        borderRadius: 20,

        textAlign: "left",

        paddingHorizontal: 15,

        fontSize: 18,
        fontWeight: "400"
    },

    inputType2: {
        width: "30%",
        height: 50,

        borderColor: "#A512BD",
        borderWidth: 2,
        borderRadius: 20,

        textAlign: "center",

        paddingHorizontal: 15,

        fontSize: 18,
        fontWeight: "400"
    },

    invisbleInput:{
        width: "30%",
        height: 50,
    },

    inputType3: {
        width: "100%",
        height: 100,

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "wrap",

        borderColor: "#A512BD",
        borderWidth: 2,
        borderRadius: 20,

        textAlign: "left",

        paddingHorizontal: 15,
        padding: 10,

        fontSize: 18,
        fontWeight: "400"
    },

    inputType4: {
        width: "90%",
        height: 45,

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "wrap",

        textAlign: "left",

        paddingHorizontal: 15,

        fontSize: 18,
        fontWeight: "400",
    },

    iconInput: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: "10%",
        height: 25,
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

    bannerContainer:{
        // marginTop: 30
    },

    banner: {
        marginVertical: 15,
    },

    borderLocationInput: {
        borderColor: "#A512BD",
        borderWidth: 2,

        borderRadius: 20,

        marginVertical: 15
    },

    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    },

    descriptionLengthText: {
        fontSize: 15,
        fontWeight: "400",
        alignSelf: "flex-end",

        paddingHorizontal: 10,
        marginVertical: 10
    },

    eventNameLengthText: {
        fontSize: 15,
        fontWeight: "400",
        alignSelf: "flex-end",

        paddingHorizontal: 10,
        marginTop: 10
    },

    button: {
        width: 200,
        height: 55,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",

        borderRadius: 20,

        backgroundColor: "#FF6709",

        marginBottom: 20
    },
})

