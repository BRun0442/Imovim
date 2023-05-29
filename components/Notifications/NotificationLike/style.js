import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",

        backgroundColor: "#F1F1F1",

        width: "100%",
        height: 120,

        paddingHorizontal: 5,

        borderRadius: 30,

        marginBottom: 10,

        elevation: 4,
    },

    iconCam: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: 80,
        height: 80,

        backgroundColor: "#d9d9d9",

        borderRadius: 100,
        borderColor: "#fff",
        borderWidth: 3,

        marginRight: 6
    },

    textContainer:{
        display: "flex",
        flexDirection: "column",  
        flexWrap: "wrap"
    },

    textNotifcation:{
        fontSize: 15,
        fontWeight: "500"
    },

    textTime:{
        fontSize: 14
    }
})