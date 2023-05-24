import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

export const toastConfig = {

  success: (props) => (
    <BaseToast
      {...props}
      text1Style={{
        fontSize: 15,
        fontWeight: "400"
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 15,
        fontWeight: "400"
      }}
    />
  ),

  imovimError: ({ text1, props }) => (
    <View style={styles.toastError}>
      <Text style={styles.toastErrorText}>{text1}</Text>
    </View>
  ),

  imovimSuccess: ({ text1, props }) => (
    <View style={styles.toastSucess}>
      <Text style={styles.toastSucessText}>{text1}</Text>
    </View>
  ),

  imovimCopy: ({ text1, props }) => (
    <View style={styles.toastCopyContainer}>
      <Feather name="check" size={28} color="#00c001" />
      <Text style={styles.toastCopy}>{text1}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  toastSucess: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "95%",
    height: 50,

    marginTop: -35,

    backgroundColor: "#F6F6F6",

    borderLeftWidth: 8,
    borderLeftColor: "#008000",
    borderRadius: 15,
  },

  toastSucessText: {
    fontSize: 20,
    fontWeight: "400"
  },

  toastError: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "95%",
    height: 60,

    marginTop: -35,

    backgroundColor: "#F6F6F6",

    borderLeftWidth: 8,
    borderLeftColor: "#FF0000",
    borderRadius: 15,
  },

  toastErrorText: {
    fontSize: 20,
    fontWeight: "400"
  },

  toastCopyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    width: "90%",
    height: 50,

    marginTop: -500,

    backgroundColor: "#FFF",
    borderRadius: 15,
  },

  toastCopy: {
    fontSize: 20,
    fontWeight: "400",

    marginLeft: 10
  }
})