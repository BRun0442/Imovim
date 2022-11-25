import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  header: {
    height: 250,
  },

  title: {
    color: 'white',
    fontSize: 5,
  },

  containerProfile: {
    backgroundColor: '#A512BD',
    width: '100%',
    height: '45%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: '5%',
    paddingBottom: '3%',
  },

  containerExit: {
    backgroundColor: '#1E90FF',
    width: '100%',
    height: '15%',
    justifyContent: 'center',
  },

  smallText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  profileImage: {
    width: 48, 
    height: 48,
    marginRight: '10%',
    marginBottom: '3%',
    borderRadius: 24,
  },

  logo: {
    position: 'absolute',
    left: '50%',
    // marginLeft: 'auto',
    fontSize: 50,
    color: '#FF6709',
  },

  photoContainer: {
    flexWrap: 'wrap',
    height: 60,
    width: 200,
    padding: 5,
    borderRadius: 30,
    backgroundColor: '#FF6709',
    justifyContent: 'center',
    alignContent: 'space-around',
    // alignContent: 'center',
    alignSelf: 'center',
    marginTop: '5%',
  },

  button: {
    backgroundColor: '#FF6709',
  },
});
