import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

export default function ProfileImage(props) {
  return (
    <View>
      <Image
        style={styles.profileImage}
        source={{uri: props.profileImage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}}
      />
    </View>
  );
}