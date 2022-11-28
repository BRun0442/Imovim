import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./styles";
import { defaultStyle } from "../../assets/style/style";
import ProfileImage from "../ProfileImage/ProfileImage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function TopBar(props) {
  return (
    <View style={styles.header}>
      <View style={styles.containerProfile}>
        <Text style={styles.logo}>II</Text>
        <ProfileImage profileImage={props.profileImage} />
      </View>

      <View style={styles.containerExit}>
        <TouchableOpacity>
          <Text style={styles.smallText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.photoContainer}>
        <TouchableOpacity styles={styles.button}>
          <MaterialCommunityIcons name="calendar" color={"#fff"} size={26} />
        </TouchableOpacity>

        <TouchableOpacity styles={styles.button}>
          <MaterialCommunityIcons name="camera" color={"#fff"} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TopBar;
