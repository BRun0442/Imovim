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
        source={{uri: props.profileImage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}}
      />
    </View>
  );
}

export default ProfileImage;
