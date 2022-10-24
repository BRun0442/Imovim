import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight/100 // altura em porcentagem
const width = ScreenWidth/100 // largura em porcentagem

export const styles = StyleSheet.create({
  container: {
    height: ScreenHeight + 20*height,
      width: ScreenWidth,
      backgroundColor: '#A512BD',
      paddingTop: 3,
      paddingBottom: 12,
      paddingHorizontal: 35,
      overflowX: "hidden",
  },

  basketImg: {
    height: 140,
    width: 140,
    position: "absolute",
    top: 20 * height,
    left: 85 * width
  },
  footImg: {
    height: 160,
    width: 160,
    position: "absolute",
    top: 80 * height, // 80%
    right: 83 * width // 83%
  },

  title: {
    marginTop: 50,
      fontSize: 35,
      fontWeight: 'bold',
      color: '#FF6709',
      textAlign: "center",
  },

  containerCadastro: {
    backgroundColor: "rgba(0,0,0,0.3)",
      height: 90 * height,
      borderRadius: 25,
      marginTop: 10,
      paddingHorizontal: 25,
      display: "flex",
      gap: 100,
  },
  containerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30
  },
  containerInput: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 120
  },
  input: {
    color: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 20,
    paddingBottom: 6,
    paddingLeft: 3
  },

  containerDate: {
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 15
  },

  inputDate: {
    color: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#FFF",
    width: "25%",
    fontSize: 18,
    paddingBottom: 6,
    paddingLeft: 3,
    textAlign: "center"
  },

  titleDate: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },

  button: {
    backgroundColor: "#FF6709",
    width: 150,
    height: 50,
    display: "flex",
    justifyContent: "center",
    paddingVertical: 4,
    textAlign: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17
  },
  containerBottom: {
    marginTop: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 6,
    marginBottom: 3
  },
  text2: {
    color: "#FF6709",
    fontWeight: "bold",
    fontSize: 17,
  }

});