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

    paddingVertical: 20,

    backgroundColor: "#A512BD",
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
    bottom: 400,
    left: -80,
    width: 150,
    height: 150,
  },

  form: {
    width: 96 * width,
    height: 95 * height,

    alignSelf: "center",

    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.3)",

    paddingHorizontal: 8,
  },
  formDateContainer: {
    width: "100%",
  },

  formDateText: {
    width: "100%",

    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",

    marginTop: 25
  },

  formDate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    marginVertical: 20
  },

  input: {
    width: "25%",
    height: 50,

    color: "#FFF",

    borderBottomWidth: 3,
    borderBottomColor: "#FFF",

    fontSize: 20,
    fontWeight: "400",
  },

  subTitleContainer: {
    width: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 30
  },

  subTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#FFF",
  },

  inputLongContainer: {
    paddingHorizontal: 15
  },

  inputLong: {
    width: "100%",
    height: 50,

    color: "#FFF",

    borderBottomWidth: 3,
    borderBottomColor: "#FFF",
    fontSize: 20,
    fontWeight: "400",

    padding: 5,
    marginVertical: 50,
  },

  buttonContainer: {
    width: "100%",

    marginVertical: 40,
    paddingHorizontal: 50,
  },

  button: {
    backgroundColor: "#FF6709",
    width: "100%",
    height: 60,

    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",

    marginVertical: 10,
  },

  transparentButton: {
    width: "100%",
    height: 60,

    borderBottomWidth: 2,
    borderColor: "#FF6709",
    borderWidth: 3,

    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",

    marginVertical: 10,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "500",

    textAlign: "center",
  },

  textContainer: {
    marginVertical: 50
  },

  text: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",

    textAlign: "center",
  },

  inputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 2,
    borderColor: "#F8670E",

    paddingHorizontal: 50,
    marginVertical: 40,

    borderRadius: 25
  },

  inputNumber: {
    width: "100%",
    height: 50,

    color: "#FFF",

    borderBottomWidth: 3,
    borderBottomColor: "#FFF",
    fontSize: 25,
    fontWeight: "400",

    padding: 5,
    marginVertical: 25,

    textAlign: "center"
  },

  iconInput: {
    position: "absolute",
    right: 8,
    top: 25,
  },

  redefineInput: {
    width: "100%",
    height: 50,

    color: "#FFF",

    borderBottomWidth: 3,
    borderBottomColor: "#FFF",
    fontSize: 20,
    fontWeight: "400",

    padding: 5,
    marginVertical: 20
  },

  titleTextContainer: {
    width: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginVertical: 50
  },

  titleText: {
    fontSize: 20,

    fontWeight: "bold",

    color: "#FFF",
    fontWeight: "700",
  }
});