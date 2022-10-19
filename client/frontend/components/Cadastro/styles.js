import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '130vh',
    width: '100vw',
    backgroundColor: '#A512BD',
    paddingTop: "0.5em",
    paddingBottom: "2em",
    paddingHorizontal: "2.2em",
    overflowX: "hidden",
  },

  basketImg: {
    height: "7em",
    width: "7em",
    position: "absolute",
    top: "15%",
    left: "82%"
  },
  footImg: {
    height: "8em",
    width: "7em",
    position: "absolute",
    top: "67%",
    right: "85%"
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FF6709',
    textAlign: "center",
    fontFamily: "oswald",
  },

  containerCadastro: {
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "90%",
    borderRadius: "15px",
    marginTop: "10px",
    paddingHorizontal: "2em",
    display: "flex",
    gap: "30px"
  },
  containerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: "center",
    fontFamily: "oswald",
    marginTop: "1.5em"
  },
  containerInput: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2em"
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

  containerDate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: "15px"
  },

  inputDate: {
    color: "#fff",
    borderBottomWidth: "2px",
    borderBottomColor: "#FFF",
    width: "25%",
    fontSize: "1em",
    paddingBottom: "0.7em",
    paddingLeft: "0.5em",
    textAlign: "center"
  },

  titleDate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: "center",
    fontFamily: "oswald",
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
  }

});