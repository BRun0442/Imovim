import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "120%",
    backgroundColor: "#A512BD",

    paddingHorizontal: 10
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

  titleContainer: {
    width: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginVertical: 20
  },

  title: {
    fontSize: 50,

    fontWeight: "bold",

    color: "#FF6709",
    fontWeight: "700",
  },

  form: {
    width: "100%",

    display: "flex",
    // justifyContent: "center",

    borderRadius: 25,
    backgroundColor: "#640c74",

    paddingHorizontal: 15,
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

  interTitleContainer: {
    width: "100%",

    display: "flex",
    alignItems: "flex-start",

    marginTop: 30,
  },

  interTitle: {
    fontSize: 20,
    fontWeight: "400",
    color: "#FFF",
  },

  inputContainer:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 2,
    borderColor: "#F8670E",

    paddingHorizontal: 50,
    marginVertical: 40

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
    marginVertical: 20
  },

  buttonContainer: {
    width: "100%",

    marginVertical: 50
  },

  button: {
    backgroundColor: "#FF6709",
    width: "60%",
    height: 60,

    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",

    marginBottom: 25,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "500",

    textAlign: "center",
  },

  forgotPasswordContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  text1: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },

  text2: {
    color: "#FF6709",
    fontSize: 21,
    fontWeight: "bold",

    marginLeft: 10
  },

  radioContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    marginVertical: 50
  },

  radio: {
    width: 15,
    height: 15,

    backgroundColor: "#D9D9D9",

    borderRadius: 20,

    marginHorizontal: 15
  },

  radioOrange: {
    width: 15,
    height: 15,

    backgroundColor: "#F8670E",

    borderRadius: 20,

    marginHorizontal: 15
  }
});