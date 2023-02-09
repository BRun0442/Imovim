import { StyleSheet, StatusBar } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 20 : 60
// currentHeight - diz o tamanho atual da StatusBar

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 110,

    paddingTop: statusBarHeight,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    paddingLeft: '50%',
    paddingRight: '2%',
    backgroundColor: '#A512BD',
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  
  logo: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FF6709'
  },

  containerLogo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    paddingLeft: 10
  },
});
