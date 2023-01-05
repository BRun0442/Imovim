import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
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
    color: "white",
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
    marginTop: '20%',
  },

  phoneContainer: {
    flex: 1,
    flexWrap: 'wrap',
  },
});
