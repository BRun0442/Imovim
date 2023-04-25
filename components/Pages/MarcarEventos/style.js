import { StyleSheet } from "react-native"

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "130%"
    },

    iconContainer: {
        width: 200,
        height: 55,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",


        paddingHorizontal: 25,
        padding: 5,
        marginTop: 18,

        borderRadius: 30,

        backgroundColor: "#FF6709",
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

    postContainer: {
        alignSelf: "center",
        width: "90%",
        height: 50,
        marginBottom: "2%",
    },

    postProfile: {
        height: 50,
        flexWrap: "wrap",
        justifyContent: "center",
    },

    postImage: {
        height: 1000,
        // Imagens de proporções diferentes mantem a proporção e se adequam ao container!
        resizeMode: "contain",
    },

    profileName: {
        fontWeight: "500",
        marginLeft: 8,
        fontSize: 16
    },

    postDate: {
        fontWeight: "300",
    },


    form: {
        width: "100%",
        
        paddingHorizontal: 20,
    },

    formText: {
        fontWeight: "500",
        fontSize: 18
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

    inputType3: {
        width: "100%",
        height: 50,

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
        height: 25,

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "wrap",

        textAlign: "left",

        paddingHorizontal: 15,

        fontSize: 18,
        fontWeight: "400"
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

    banner: {
        marginBottom: 15,
        marginTop: 15
    },

    nameInputs: {
        marginBottom: 15,
        marginTop: 15
    },

    dataInputs: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",

        marginBottom: 15,
        marginTop: 15
    },

    horaInputs: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",

        marginBottom: 15,
        marginTop: 15
    },

    locationInput: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        marginBottom: 15,
        marginTop: 15
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
        alignSelf: "flex-end"
    }

})

