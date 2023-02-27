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

  title: {
    color: "#FF6709",
    fontSize: 60,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "700",
  },

  text: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },

  acessContainer: {
    marginTop: 20,
  },

  transparentButton: {
    borderRadius: 20,
    borderBottomWidth: 2,
    borderColor: "#FF6709",
    borderWidth: 3,
    marginTop: 15,
  
    width: 175,
    height: 50,
    
    justifyContent: "center",
    alignSelf: 'center',
  },
});
