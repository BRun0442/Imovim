import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        display: "flex",
        alignItems: "center",

        alignSelf: "center",

        flexDirection: "row",
        backgroundColor: "#F1F1F1",

        width: "90%",
        height: 120,
        
        padding: 15,

        borderRadius: 30,

        marginVertical: 8
    },

    iconCam: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: 60,
        height: 60,

        backgroundColor: "#d9d9d9",

        borderRadius: 100,
        borderColor: "#fff",
        borderWidth: 3
      }
})