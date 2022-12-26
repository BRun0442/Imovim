import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%'
  },

  buttons: {
    marginBottom: '20%'
  },

  button: {
    width: 400,
    height: 50,
    marginVertical: 10,
    borderRadius: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#750E86',
    flexDirection: 'row',
    paddingStart: '5%'
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: '3%'
  },

  postContainer: {
    alignSelf: 'center',
    marginBottom: '10%',
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

  profileImage: {
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },

  coment: {
    textAlign: 'center'
  }

}
)