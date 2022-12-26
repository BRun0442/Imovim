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
import Header from '../Header/Header'

function TopBar() {
  return (
    <View style={styles.container}>
      <Header />
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
