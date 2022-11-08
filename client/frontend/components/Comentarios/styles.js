import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#A512BD',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 15,
        justifyContent: 'space-between',
    },

    container1: {
        display: 'flex',
        flexDirection: 'row',
        width: 125,
        justifyContent: 'space-between',
    },

    number: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 7,
    },

    comments: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    flatList: {
        width: '100%',
        display: 'flex',
    },

    containerComment: {
        marginTop: 5,
        marginBottom: 15,
        minHeight: 120,
        paddingHorizontal: 30,
        width: '100%',
        backgroundColor: '#ededed'
    },

    center: {
        borderRadius: 35,
        minHeight: 120,
        backgroundColor: '#FFFFFF',
    },

    top: {
        paddingLeft: 15,
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'row',
    },

    profileImg: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },

    complement: {
        paddingTop: 7,
        paddingLeft: 7,
    },

    containerContent: {
        paddingLeft: 35,
        paddingTop: 10,
        paddingRight: 15,
        paddingBottom: 15,
    },

    content: {
        fontSize: 15,
        // textAlign: 'justify'
    }
})