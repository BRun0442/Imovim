import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    backgroundColor: "#fff",
  },

  background: {
    height: 100,
    backgroundColor: "#d9d9d9",
  },

  logo: {
    position: 'absolute',

    // Alinha verticalmente
    justifyContent: 'center',

    //Alinha horizontalmente
    alignSelf: 'center',

    fontSize: 50,
    color: '#FF6709',
    zIndex: 1,
  },

  perfil: {
    marginTop: -60,
  },

  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: 20,
    paddingEnd: 20,
  },

  iconCam: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    backgroundColor: "#d9d9d9",
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 5
  },

  iconPencil: {
    marginRight: 10,
    marginTop: 5
  },

  infos:{
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    paddingStart: 20,
    paddingEnd: 20,
  },

  data: {
    textAlign: "left"
  },

  name: {
    fontWeight: "bold",
    fontSize: 20
  },

  location: {
    fontWeight: "bold",
    fontSize: 12
  },

  buttonSeeMore: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#A512BD',
    width: 120,
    height: 30,
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textButtonSeeMore: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 2
  },

  border: {
    width: '100%',
    height: '2%',
    borderRadius: 10,
    backgroundColor: '#A512BD',
    marginTop: 10
  },

  tagsView: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 40,
  },

  tags: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#5CE1E6',
    width: 'fit-content',
    height: 30,
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 10,
  }

}
)