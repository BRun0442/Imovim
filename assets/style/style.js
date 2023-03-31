import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const defaultStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    backgroundColor: "#A512BD",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    height: 75 * height,
    width: 85 * width,
    alignSelf: "center",
    borderRadius: 25,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },

  title: {
    fontSize: 80,
    textAlign: "center",

    fontWeight: "bold",

    color: "#FF6709",
    fontWeight: "700",
  },

  subTitle: {
    fontSize: 33,
    textAlign: "center",
    marginTop: "10%",
    marginBottom: "2%",
    fontWeight: "500",
    color: "white",
  },

  defaultText: {
    color: "white",
    fontSize: 18,
    width: "100%",
    fontWeight: "500",
    // marginLeft: 40,
  },

  smallText: {
    color: "white",
    marginLeft: 20,
    paddingTop: 5,
  },

  mediumText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    paddingTop: 5,
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
