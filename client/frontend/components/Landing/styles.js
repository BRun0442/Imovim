import { StyleSheet } from "react-native";

import { Dimensions } from 'react-native'
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight/100 // altura em porcentagem
const width = ScreenWidth/100 // largura em porcentagem

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A512BD',
    },

    contentTitle: {
        paddingTop: 50,
        paddingBottom: 25
    },

    title: {
        fontSize: 90,
        fontWeight: 'bold',
        color: '#FF6709',
        textAlign: "center",
    },

    contentSubTitle: {
        paddingTop: 25,
        paddingBottom: 20,
        paddingStart: 20,
        paddingEnd: 20
    },

    subTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: "center",
        paddingBottom: 25
    },

    buttons:{
        paddingStart: 100,
    },  

    typeButton1: {
        backgroundColor: '#FF6709',
        width: 250,
        height: 60,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    typeButton2:{
        width: 250,
        height: 60,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderColor: '#FF6709',
        borderWidth: 3
    },

    textButton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20
    },

    wavesImg: {
        height: '50%',
        width: '100%',
        position: 'absolute',
        bottom: -45
    }

})
