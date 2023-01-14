import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A512BD",
    height: ScreenHeight + 20 * height,
  },

  // containerTitle: {
  //   height: '25%',
  //   display: 'flex',
  //   alignItems: 'center',
  //   backgroundColor: '#000'
  // },

  title: {
    color: "#FF6709",
    fontSize: 100,
    textAlign: "center",
    marginVertical: "15%",
    fontWeight: "700",
  },

  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginBottom: "5%",
  },
  
  img: {
    width: '100%'

  },

  acessContainer: {
    height: 1500,
    alignContent: "space-around",
    marginTop: "8%",
  },

  transparentButton: {
    borderRadius: 20,
    borderBottomWidth: 2,
    borderColor: "#FF6709",
    borderWidth: 3,
    marginTop: 15,

    minWidth: 250,
    height: 45,

    justifyContent: "center",
    alignSelf: 'center',
  },
});
