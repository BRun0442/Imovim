import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./styles";
import { defaultStyle } from "../../assets/style/style";

function ProfileImage(props) {
  return (
    <View style={styles.header}>
      <Image
        style={styles.profileImage}
        source={{uri: props.profileImage}}
      />
    </View>
  );
}

export default ProfileImage;
