import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },

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
    width: "100%",
    height: 90,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FFF",
  },

  topBar: {
    width: 200,
    height: 55,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

    paddingHorizontal: 25,

    borderRadius: 30,

    backgroundColor: '#FF6709',
  },

  button: {
    padding: 2,
  },

  optionPost: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",
    height: 80,

    backgroundColor: "#F1F1F1",

    marginTop: 15,
  },

  buttonGlobal: {
    width: "50%",
    height: 90,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonFriends: {
    width: "50%",
    height: 90,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  optionPostButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: 150,
    height: 50,

    borderRadius: 50
  },

  optionPostButtonText: {
    fontSize: 18,
    fontWeight: "bold"
  },

});