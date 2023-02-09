import { StyleSheet, StatusBar, Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 20 : 60

export const styles = StyleSheet.create({ 

  header: {
    backgroundColor: '#A512BD',
    height: 10 * height,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 35,
    paddingTop: statusBarHeight,
  },

  likeAndComents: {
    flexDirection: 'row',
    width: '45%',
    justifyContent: 'space-around',
    flex: 1
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