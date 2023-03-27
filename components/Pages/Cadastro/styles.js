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
    justifyContent: "center"
  },

  textBox: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "85%",
    marginLeft: 25,
    marginTop: 20,
  },

  input: {
    color: "#FFF",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    fontSize: 20,
    fontWeight: "400",
    paddingBottom: 6,
    marginTop: 35,
    alignSelf: "center",
    flexGrow: 1,
    marginHorizontal: 5,
  },

  buttonContainer: {
    marginTop: 5,
  },

  phoneContainer: {
    flex: 1,
    flexWrap: 'wrap',
  },
});
