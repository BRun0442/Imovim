import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight/100 // altura em porcentagem
const width = ScreenWidth/100 // largura em porcentagem

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#A512BD',
      height: ScreenHeight + 20*height,
    },

    title: {
      fontSize: 40,
      textAlign: 'center',

      // Essa linha crasha o sistema!
      // fontWeight: 30,

      marginTop: 70,
      marginBottom: 30,
      color: '#FF6709',
    },

    subTitle: {
      fontSize: 40,
      textAlign: 'center',
      marginBottom: 30,
      marginTop: 30,
      color: 'white',
    },

    inputContainer: {
      backgroundColor: "rgba(0,0,0,0.3)",
      height: 80 * height,
      width: 90 * width,
      // marginLeft: 2,
      borderRadius: 25,
      paddingHorizontal: 20,
      marginHorizontal: 20,
      // paddingLeft: '10%',
    },  

    textBox: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: '85%',
      marginLeft: 40,
      marginVertical: 20,
    },

    defaultText: {
      color: 'white',
      fontSize: 18,
      marginTop: 20,
      width: '100%',
      // marginLeft: 40,
    },

    smallText: {
      color: 'white',
      paddingLeft: 5,
      paddingTop: 5,
    },

    mediumText: {
      color: 'white',
      fontSize: 15,
      textAlign: 'center',
      paddingTop: 5,
    },

    passwordContainer: {
      marginBottom: '30%',
    },

    buttonContainer: {
      height: '100%',
    },
});
