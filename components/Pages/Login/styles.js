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
      fontSize: 30,
      textAlign: 'center',

      // Essa linha crasha o sistema!
      // fontWeight: 30,

      marginTop: 60,
      marginBottom: 10,
      color: '#FF6709',
      fontWeight: '700',
    },

    subTitle: {
      fontSize: 33,
      textAlign: 'center',
      marginTop: '25%',
      marginBottom: '10%',
      fontWeight: '500',
      color: 'white',
    },

    inputContainer: {
      backgroundColor: "rgba(0,0,0,0.3)",
      height: 85 * height,
      width: 85 * width,
      alignSelf: 'center',
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
      marginLeft: 20,
      paddingTop: 5,
    },

    mediumText: {
      color: 'white',
      fontSize: 15,
      textAlign: 'center',
      paddingTop: 5,
    },

    passwordContainer: {
      marginBottom: '20%',
    },

    buttonContainer: {
      height: '100%',
    },
});
