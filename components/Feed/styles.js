import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight/100 // altura em porcentagem
const width = ScreenWidth/100 // largura em porcentagem

export const styles = StyleSheet.create({
    contentTop: {
        position: 'relative',
    }, 

    header: {
        height: 80,
        backgroundColor: '#A512BD',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    content: {
        width: '55%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingEnd: 20,
    },

    logo: {
        color: '#FF7926',
        marginRight: 20,
        fontSize: 50,
        fontWeight: 'bold',
    },

    containerProfile: {
        height: 50,
        width: 50,
        backgroundColor: 'gray',
        borderRadius: 100,
    },

    containerOptions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    options: {
        marginTop: 15,
        marginBottom: 15,
        width: '50%',
        height: 45,
        backgroundColor: '#FF7926',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 40
    },

    containerPost: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    postHeader: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        
    },

    postInfo: {
        paddingLeft: 15,
        display: 'flex',
        justifyContent: 'flex-end',
    },

    profileImg: {
      height: 50,
      width: 50,
      borderRadius: 100,  
    },

    username: {
        fontWeight: 'bold'
    },

    created_at: {
        color: '#8f8989'
    },

    containerPostImg: {
        marginTop: 18,
        height: 25 * height,
        width: 100 * width,
        display: 'flex',
        alignItems: 'center',
    },

    postImg: {
        height: '100%',
        width: '80%'
    },

    containerBottom: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    postInteractions: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-evenly',
    },

    icon: {
        backgroundColor: '#A512BD',
        borderRadius: 100,
        height: 40,
        width: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    InteractionNumber: {
        position: 'absolute',
        top: 25,
        right: 28,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 18,
        width: 18,
        borderRadius: 100,
        backgroundColor: '#c9c9c9'
    },

    number: {
        fontSize: 12,
    },

    captionContainer: {
        marginTop: 8,
        marginBottom: 4,
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
    },

    caption: {
        fontSize: 18,
        textAlign: 'justify'
    }
})