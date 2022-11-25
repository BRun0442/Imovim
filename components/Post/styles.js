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
    },

    postProfile: {
      height: 48,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '3%',
      // flexDirection: 'row',
    },

    postImage: {
      height: 200,
      width: 350,
      resizeMode: 'stretch',
    },

    postDescription: {
      marginTop: '2%',
      fontWeight: '500',
    },
    
    postInteraction: {
      // flexDirection: 'row',
      // maxWidth: 
    },

    postInteractionImage: {
      height: 40,
      width: 40,
      backgroundColor: '#A512BD',
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
});
