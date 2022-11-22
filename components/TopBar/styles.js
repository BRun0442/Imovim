import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  header: {
    height: '100%',
  },

  title: {
    color: 'white',
    fontSize: 5,
  },

  containerProfile: {
    backgroundColor: '#A512BD',
    width: '100%',
    height: '9%',
  },

  containerExit: {
    backgroundColor: '#1E90FF',
    width: '100%',
    height: '4%',
  },

  smallText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
