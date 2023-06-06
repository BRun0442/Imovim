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

    paddingHorizontal: 10,
    paddingVertical: 20
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
    bottom: 100,
    left: -80,
    width: 150,
    height: 150,
  },

  titleContainer: {
    width: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 15
  },

  title: {
    fontSize: 50,

    fontWeight: "bold",

    color: "#FF6709",
    fontWeight: "700",
  },

  form: {
    width: 95 * width,
    height: 85 * height,

    alignSelf: "center",

    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,0.3)",

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

  iconInput: {
    position: "absolute",
    right: 8,
    top: 25,
  },

  forgotPassword: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600"
  },

  buttonContainer: {
    width: "100%",

    marginVertical: 25
  },

  button: {
    backgroundColor: "#FF6709",
    width: "60%",
    height: 60,

    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",

    marginBottom: 15,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "500",

    textAlign: "center",
  },

  buttonGoogle: {
    width: "75%",
    height: 50,
    
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    marginBottom: 15,

    borderRadius: 10,

    backgroundColor: "#FFF",
  },

  imgGoogle:{
    width: 30,
    height: 30,

    marginHorizontal: 5
  },

  text3:{
    fontSize: 15,
  },

  line: {
    width: "100%",
    height: 1,

    backgroundColor: "#FFF",

    marginVertical: 15
  },

  forgotPasswordContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    paddingHorizontal: 10
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