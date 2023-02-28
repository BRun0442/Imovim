import React from "react";
import { Text, View, StatusBar } from "react-native";

import { styles } from "./styles";
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Text style={styles.logo}>ii</Text>
        </View>

        <View style={styles.containerIcons}>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Chat') }}>
            <Foundation
              style={styles.icon} name="magnifying-glass" size={35} color="#FF7926"

            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { navigation.navigate('Chat') }}>
            <Ionicons
              style={styles.icon} name="chatbubble" size={35} color="#FF7926"
            />
          </TouchableOpacity>

        </View>
      </View>
      <StatusBar />
    </View>
  );
}

export default Header;
