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
  },

  titleContainer: {
    width: "100%",
    height: "15%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 60,

    fontWeight: "bold",

    color: "#FF6709",
    fontWeight: "700",
  },

  form: {
    width: "100%",
    height: "85%",
    alignSelf: "center",
    borderRadius: 25,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    backgroundColor: "rgba(0,0,0,0.3)",

    paddingHorizontal: 15
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

  formDateContainer: {
    width: "100%",
    height: "40%",
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

  formContainer: {
    paddingHorizontal: 15,
  },



  subTitleContainer: {
    width: "100%",
    height: "15%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },

  subTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#FFF",
  },

  inputLong: {
    width: "100%",
    height: 50,

    color: "#FFF",

    borderBottomWidth: 3,
    borderBottomColor: "#FFF",
    fontSize: 20,
    fontWeight: "400",

    padding: 5
  },

  buttonContainer: {
    width: "100%",
    height: "30%",
    // backgroundColor: "red"
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

});
