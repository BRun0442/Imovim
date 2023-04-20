import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100 // altura em porcentagem
const width = ScreenWidth / 100 // largura em porcentagem

export const styles = StyleSheet.create({
  textBox: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: '85%',
    marginLeft: 40,
    marginVertical: 20,
  },

  passwordContainer: {
    marginBottom: '10%',
  },

  buttonContainer: {
    height: '100%',
    marginTop: '10%',
  },

  basketBall: {
    position: "absolute",
    right: -75,
    top: 170,
    resizeMode: "stretch",
    width: 150,
    height: 150,
  },

  soccerBall: {
    position: "absolute",
    resizeMode: "stretch",
    bottom: 200,
    left: -80,
    width: 150,
    height: 150,
  },
});
