import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight/100 // altura em porcentagem
const width = ScreenWidth/100 // largura em porcentagem

export const styles = StyleSheet.create({
    Input: {
      color: "white",
      borderBottomWidth: 2,
      borderBottomColor: "white",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: 20,
      fontWeight: '300',
      paddingBottom: 6,
      paddingLeft: 3,
      marginTop: 20,
    }
});