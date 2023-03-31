import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { defaultStyle } from "../../assets/style/style";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ProfileImage from '../ProfileImage/ProfileImage';

function Comentario(props) {
  return (
    <View style={styles.comentContainer}>
      <View style={styles.comentProfile}>
        <ProfileImage profileImage={props.profileImage} />

        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>{props.profileName}</Text>
          <Text style={styles.daysAgo}>{props.daysAgo}</Text>
        </View>
      </View>

      <Text style={styles.coment}>{props.coment}</Text>
    </View>
  );
}

export default Comentario;
