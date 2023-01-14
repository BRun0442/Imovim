import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({ 
  comentContainer: {
    alignSelf: 'center',
    marginTop: '5%',
    width: 350,
    backgroundColor: 'white',
    borderRadius: 35,
    padding: 15,
    
  },

  comentProfile: {
    height: 48,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '3%',
  },

  coment: {
    marginTop: '1%',
    marginLeft: 15,
    fontWeight: '500',
  },

  profileImage: {
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },

  profileName: {
    fontWeight: '500',
  },

  daysAgo: {
    fontWeight: '400',
    color: 'gray'
  },

  profileContainer: {
    flexDirection: 'column',
    marginLeft: '2%',
  },
});