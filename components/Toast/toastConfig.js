import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { View, Text } from 'react-native';

export const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: (props) => (
      <BaseToast
        {...props}
        // style={{ borderLeftColor: 'pink', position: 'absolute', top: 10 }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400'
        }}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: (props) => (
      <ErrorToast
        style={{ position: 'absolute', top: 10 }}
        {...props}
        text1Style={{
          fontSize: 17
        }}
        text2Style={{
          fontSize: 15
        }}
      />
    ),
    /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    imovimError: ({ text1, props }) => (
      <View style={{ height: 60, width: '100%', marginTop: -35, backgroundColor: '#F9F9F9', borderLeftWidth: 8, borderLeftColor: 'red', borderRadius: 15, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 20, fontWeight: "400" }}>{text1}</Text>
      </View>
    ),

    imovimSuccess: ({ text1, props }) => (
      <View style={{ height: 60, width: '100%', marginTop: -85, backgroundColor: '#F9F9F9', borderLeftWidth: 8, borderLeftColor: 'green', borderRadius: 15, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 20, fontWeight: "400" }}>{text1}</Text>
      </View>
    )
  };