import { StyleSheet, StatusBar } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  header: {
    width: '100%',
        
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    
    backgroundColor: '#A512BD',
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '50%',
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
    paddingRight: 10
  },
});
