import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { View, Text, StyleSheet } from "react-native";

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
  )
};

const styles = StyleSheet.create({
  toastSucess: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "95%",
    height: 60,

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
  }
})