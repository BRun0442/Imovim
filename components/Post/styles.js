import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight/100 // altura em porcentagem
const width = ScreenWidth/100 // largura em porcentagem

export const styles = StyleSheet.create({
    postContainer: {
      alignSelf: 'center',
      marginBottom: '10%',
      width: 350,
    },

    postProfile: {
      height: 48,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '3%',
    },

    postImage: {
      height: 200,

      // Imagens de proporções diferentes mantem a proporção e se adequam ao container!
      resizeMode: 'contain',
    },

    postDescription: {
      marginTop: '2%',
      fontWeight: '500',
    },
    
    postInteraction: {
      width: 250,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignSelf: 'center',
      marginTop: 5,
      // maxWidth: 
    },
    
    postInteractionImage: {
      height: 40,
      width: 40,
      backgroundColor: '#A512BD',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },

    profileImage: {
      height: 50,
      width: 50,
      resizeMode: 'stretch',
    },

    profileName: {
      fontWeight: '500',
    },

    postDate: {
      fontWeight: '300',
    },

    profileContainer: {
      flexDirection: 'column',
      marginLeft: '2%',
    },

    interactionQuantity: {
      position: 'absolute',
      color: 'black',
      fontWeight: '400',
      top: 25,
      left: -5,
      backgroundColor: '#DCDCDC',
      borderRadius: 10,
      minHeight: 20,
      minWidth: 20,
      textAlign: 'center',
    },
});