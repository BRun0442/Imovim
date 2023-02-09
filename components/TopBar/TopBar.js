import React, {useContext} from "react";
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
import { logout } from "../../services/login";
import { AuthContext } from "../../contexts/auth";

function TopBar(props) {
  const { setLogin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.containerProfile}>
        <Text style={styles.logo}>II</Text>
        <ProfileImage profileImage={props.profileImage} />
      </View>

      <View style={styles.containerExit}>
        <TouchableOpacity onPress={() => {logout(setLogin)}}>
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
