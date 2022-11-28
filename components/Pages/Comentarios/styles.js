import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({ 

  header: {
    backgroundColor: '#A512BD',
    height: 10 * height,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 35,
  },

  likeAndComents: {
    flexDirection: 'row',
    width: '45%',
    justifyContent: 'space-around',
  },

  button: {
    flexDirection: 'row',
  },

  buttonText: {
    color: 'white',
    fontWeight: '500',
    alignSelf: 'center',
    fontSize: 15,
    paddingLeft: 5,
  },

  comentsContainer: {
    backgroundColor: '#ededed',
    height: '100%',
  },
});