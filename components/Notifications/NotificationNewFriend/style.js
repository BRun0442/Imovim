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

        width: 80,
        height: 80,

        backgroundColor: "#d9d9d9",

        borderRadius: 100,
        borderColor: "#fff",
        borderWidth: 3
      },

      data:{
        display: "flex",
        flexDirection: "column",

        marginLeft: 15
      }
})