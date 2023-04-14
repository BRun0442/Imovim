import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        display: "flex",
        alignItems: "center",

        alignSelf: "center",

        flexDirection: "row",
        backgroundColor: "#F1F1F1",

        width: "100%",
        height: 120,
        
        padding: 15,

        borderRadius: 30,

        marginBottom: 10,
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
        borderWidth: 3
      }
})