import { StyleSheet } from 'react-native'

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
        marginBottom: '3%',
        width: 350,
        height: 'fit-content'
    },

    postProfile: {
        height: 48,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '3%',
    },

    postImage: {
        height: '100%',
        // Imagens de proporções diferentes mantem a proporção e se adequam ao container!
        resizeMode: 'contain',
    },

    profileName: {
        fontWeight: '500',
    },

    postDate: {
        fontWeight: '300',
    },

    
    form: {
        paddingStart: 40,
        paddingEnd: 50
    },

    inputType1: {
        width: '100%',
        height: 30,
        borderColor: '#A512BD',
        borderWidth: 2,
        borderRadius: 5
    },

    inputType2: {
        width: '25%',
        height: 30,
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
        textAlign: 'center',
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

