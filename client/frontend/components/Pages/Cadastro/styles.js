import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight/100 // altura em porcentagem
const width = ScreenWidth/100 // largura em porcentagem

export const styles = StyleSheet.create({
    Container: {
      backgroundColor: '#A512BD',
      height: ScreenHeight + 20*height,
    },

    Title: {
      fontSize: 40,
      textAlign: 'center',
      fontWeight: 30,
      marginTop: 70,
      marginBottom: 30,
      color: '#FF6709',
    },

    Registration: {
      fontSize: 40,
      textAlign: 'center',
      marginBottom: 30,
      marginTop: 30,
      color: 'white',
    },

    registrationContainer: {
      backgroundColor: "rgba(0,0,0,0.3)",
      height: 80 * height,
      width: 90 * width,
      // marginLeft: 2,
      borderRadius: 25,
      paddingHorizontal: 20,
      marginHorizontal: 20,
    },  

    Input: {
      marginTop: 250,
    }
});
