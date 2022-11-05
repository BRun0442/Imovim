import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight/100 // altura em porcentagem
const width = ScreenWidth/100 // largura em porcentagem

// "androidNavigationBar": {
//   "visible": "immersive"
// },

export const styles = StyleSheet.create({
    container: {
      height: ScreenHeight + 20 * height,
      width: ScreenWidth,
      backgroundColor: '#A512BD',
      paddingTop: 3,
      paddingBottom: 12,
      paddingHorizontal: 35,
      overflowX: "hidden",
    },

    basketImg: {
      height: 140,
      width: 140,
      position: "absolute",
      top: 20 * height,
      left: 85 * width
    },
    footImg: {
      height: 160,
      width: 160,
      position: "absolute",
      top: 80 * height, // 80%
      right: 83 * width // 83%
    },

    title: {
      marginTop: 50,
      fontSize: 35,
      fontWeight: 'bold',
      color: '#FF6709',
      textAlign: "center",
    },
    gradient: {
        width: 80,
        height: 80,
    },
    containerLogin: {  
      backgroundColor: "rgba(0,0,0,0.3)",
      height: 90 * height,
      borderRadius: 25,
      marginTop: 10,
      paddingHorizontal: 25,
      display: "flex",
      gap: 100,
    },
    containerTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#FFF',
      textAlign: "center",
      marginBottom: 60,
      marginTop: 70
    },
    containerInput: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 20
    },
    input: {
      width: '100%',
      borderBottomWidth: 2,
      borderBottomColor: "#FFF",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: 20,
      color: "#fff",
      paddingBottom: 6,
      paddingLeft: 3,
    },
    senha: {
      marginTop: 50
    },
    button: {
      backgroundColor: "#FF6709",
      display: "flex",
      justifyContent: "center",
      width: 150,
      height: 50,
      paddingVertical: 3,
      textAlign: "center",
      borderRadius: 20,
    },
    buttonText: {
      color: "#FFF",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 17
    },
    containerBottom: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: '30%'
    },
    text1: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: 15,
      marginTop: 12,
      marginBottom: 5
    },
    text2: {
      color: "#FF6709",
      fontWeight: "bold",
      fontSize: 17,
    },
    forgotPass: {
      marginLeft: 3,
      color: "#FFF",
      marginTop: 3
    },

  });