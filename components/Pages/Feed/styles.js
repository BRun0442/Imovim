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
    marginTop: '10%',
  },

  title: {
    color: 'white',
    fontSize: 5,
  },

  containerProfile: {
    backgroundColor: '#A512BD',
    width: '100%',
    height: '40%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: '5%',
    paddingBottom: '3%',

    // Verificar se faz efeito
    position: 'relative', 
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

    // Alinha verticalmente
    justifyContent: 'center',

    //Alinha horizontalmente
    alignSelf: 'center',
    
    fontSize: 50,
    color: '#FF6709',
    zIndex: 1,
  },

  TopBarContainer: {
    backgroundColor: 'white',
  },

  photoContainer: {
    flexWrap: 'wrap',
    height: 55,
    width: 200,
    padding: 5,
    paddingHorizontal: 25,
    borderRadius: 30,
    backgroundColor: '#FF6709',
    justifyContent: 'center',
    alignContent: 'space-around',
    // alignContent: 'center',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },

  button: {
    padding: 2,
  },

  notificationTypes:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  
    width: "100%",

    backgroundColor: "#FFF",

    marginBottom: 15
},

notificationTypesButton:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: 150,
    height: 50,

    backgroundColor: "#D9D9D9",

    borderRadius: 50
},

notificationTypesText:{
    fontSize: 18,
    fontWeight: "bold"
},

});