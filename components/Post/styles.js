import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  postBackground: {
    alignSelf: 'center',
    marginBottom: '2%',
    width: '100%',
    backgroundColor: 'white',

    // borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#E98AF9',
  },

  postContainer: {
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    width: '90%',
    backgroundColor: 'white',
  },

  postProfile: {
    width: "100%",
    height: 50,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 15,

    paddingHorizontal: 10
  },

  postImage: {
    width: '100%',
    alignSelf: 'center',
    // Imagens de proporções diferentes mantem a proporção e se adequam ao container!
    resizeMode: 'contain',
  },

  postDescription: {
    marginTop: '2%',
    fontWeight: '500',
    fontSize: 16
  },

  postInteraction: {
    width: 250,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginTop: 5,
  },

  postInteractionImage: {
    height: 40,
    width: 40,
    backgroundColor: '#A512BD',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileImage: {
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },

  profileName: {
    fontWeight: '500',
    fontSize: 16
  },

  postDate: {
    fontWeight: '300',
    fontSize: 15
  },

  complaint:{
    fontWeight: "600",
    fontSize: 18
  },

  profileContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'row',

    width: "90%"
  },

  interactionQuantity: {
    position: 'absolute',
    color: 'black',
    fontWeight: '400',
    top: 25,
    left: -5,
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    minHeight: 20,
    minWidth: 20,
    textAlign: 'center',
  },

  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#FF1493',
  },
});