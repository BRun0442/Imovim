import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      height: '100vh',
      width: '100vw',
      backgroundColor: '#A512BD',
      paddingTop: "0.5em",
      paddingBottom: "2em",
      paddingHorizontal: "2.2em"
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#FF6709',
      textAlign: "center",
    },
    gradient: {
        width: '80vw',
        height: '80vh',
    },
    containerLogin: {  
      backgroundColor: "rgba(0,0,0,0.3)",
      height: "90%",
      borderRadius: "15px",
      marginTop: "10px",
      paddingHorizontal: "2em"
    },
    containerTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#FFF',
      textAlign: "center",
      marginTop: "1em",
      marginBottom: "1em"
    },
    containerInput: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      color: "#fff",
      borderBottomWidth: "2px",
      borderBottomColor: "#FFF",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "1em",
      paddingBottom: "0.7em",
      paddingLeft: "0.5em"
    },
    senha: {
      marginTop: "2em"
    },
    button: {
      backgroundColor: "#FF6709",
      width: "6.5em",
      paddingVertical: "0.6em",
      textAlign: "center",
      borderRadius: "20px",
    },
    buttonText: {
      color: "#FFF",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "17px"
    },
    containerBottom: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "2.5em"
    },
    text1: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: "14px",
      marginTop: "0.8em",
      marginBottom: "0.3em"
    },
    text2: {
      color: "#FF6709",
      fontWeight: "bold",
      fontSize: "16px",
    },
    forgotPass: {
      marginLeft: "0.5em",
      color: "#FFF",
      marginTop: "0.2em"
    }
  });