import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Text style={styles.logo}>ii</Text>
        </View>
        <View style={styles.containerIcons}>
          <Foundation style={styles.icon} name="magnifying-glass" size={35} color="#FF7926" />
          <Ionicons style={styles.icon} name="chatbubble" size={35} color="#FF7926" />
        </View>
      </View>
    </View>
  );
}

export default Header;
