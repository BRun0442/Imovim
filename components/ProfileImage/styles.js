import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  profileImage: {
    height: 48, 
    width: 48, 
    resizeMode: "stretch",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#FF7926',
  },
});
