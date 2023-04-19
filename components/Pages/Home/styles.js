import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    backgroundColor: "#A512BD",

    display: "flex",
    flexDirection: "column",
  },

  infoContainer: {
    width: "100%",
    height: "80%",    
  },

  titleContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "30%",
  },

  title: {
    fontSize: 120,
    textAlign: "center",

    fontWeight: "bold",

    color: "#FF6709",
    fontWeight: "700",
  },

  // title: {
  //   width: "100%",
  //   height: "60%"
  // },
  
  textContainer:{
    width: "100%",
    height: "35%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 15,
  },

  text: {
    color: "#FFF",
    fontSize: 26,
    textAlign: "center",

    marginVertical: 15
  },

  button: {
    backgroundColor: "#FF6709",
    width: "55%",
    height: 60,

    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",

    marginBottom: 25,
  },

  textButtons: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "500",

    textAlign: "center",
  },

  transparentButton: {
    width: "55%",
    height: 60,

    borderBottomWidth: 2,
    borderColor: "#FF6709",
    borderWidth: 3,

    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
  },

  buttonsContainer:{
    width: "100%",
    height: "40%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  imgContainer:{
    width: "100%",
    height: "20%",
  },

  img: {
    width: "100%",
    height: "100%",
  }
});
