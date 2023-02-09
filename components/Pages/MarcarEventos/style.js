import { StyleSheet } from 'react-native'

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({

    container: {
        flex: 1,
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
        marginBottom: '5%'
    },

    button: {
        height: 55,
        width: 200,
        padding: 5,
        borderRadius: 30,
        backgroundColor: '#FF6709',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '5%',
    },

    postContainer: {
        alignSelf: 'center',
        width: '90%',
        height: 50,
        marginBottom: '2%',
        
    },

    postProfile: {
        height: 50,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },

    postImage: {
        height: 1000,
        // Imagens de proporções diferentes mantem a proporção e se adequam ao container!
        resizeMode: 'contain',
    },

    profileName: {
        fontWeight: '500',
        marginLeft: 8 
    }, 
    
    postDate: {
        fontWeight: '300',
    },

    
    form: {
        paddingStart: 20,
        paddingEnd: 20,
        height: 525
    },

    inputType1: {
        width: '100%',
        height: 40,
        borderColor: '#A512BD',
        borderWidth: 2,
        borderRadius: 5,
        textAlign: 'left',
        paddingStart: 10,
        paddingEnd: 10
    },

    inputType2: {
        width: '25%',
        height: 40,
        borderColor: '#A512BD',
        borderWidth: 2,
        borderRadius: 5,
        textAlign: 'center'
    },
    
    inputType3: {
        width: '100%',
        height: 100,
        borderColor: '#A512BD',
        borderWidth: 2,
        borderRadius: 5,
        textAlign: 'left',
        paddingStart: 10,
        paddingEnd: 10
    },

    inputTypeFalse: {
        width: '25%',
        height: 30,
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 5,
    },
    
    nameInputs: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '3%',
        marginTop: '3%'
    },

    dataInputs:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: '3%',
        marginTop: '3%'
    },
    
    horaInputs: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: '3%',
        marginTop: '3%'
    },
    
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17
    }
    
})

