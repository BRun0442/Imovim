import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar
} from "react-native";

import { defaultStyle } from "../../../assets/style/style";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Comentario from '../../Comentario/Comentario';

function Comentarios(props) {
  return (
    <ScrollView>
      <StatusBar/>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.likeAndComents}>
            <TouchableOpacity style={styles.button}>
              <AntDesign name="like1" size={24} color="white" />
              <Text style={styles.buttonText}>{props.likeQuantity}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="chatbubble" size={24} color="white" />
              <Text style={styles.buttonText}>{props.comentQuantity}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="share" size={24} color="white" />
            <Text style={styles.buttonText}>{props.shareQuantity}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.comentsContainer}>
          <Comentario
            profileImage="https://randomuser.me/api/portraits/thumb/men/57.jpg"
            profileName="Osmar"
            daysAgo="2 days ago"
            coment="Show de bola!"
          />
          
          <Comentario
            profileImage="https://randomuser.me/api/portraits/thumb/women/51.jpg"
            profileName="Camila Fernandes"
            daysAgo="1 days ago"
            coment="Jogou muito!!"
          />

          <Comentario
            profileImage="https://randomuser.me/api/portraits/thumb/men/67.jpg"
            profileName="Tiago"
            daysAgo="3 days ago"
            coment="Que golaço da #$#@"
          />

          <Comentario
            profileImage="https://randomuser.me/api/portraits/thumb/men/50.jpg"
            profileName="Luis"
            daysAgo="5 mins ago"
            coment="Esquece, pai ta chato"
          />

          <Comentario
            profileImage="https://randomuser.me/api/portraits/thumb/men/50.jpg"
            profileName="Luis"
            daysAgo="5 mins ago"
            coment="Esquece, pai ta chato"
          />

          <Comentario
            profileImage="https://randomuser.me/api/portraits/thumb/men/50.jpg"
            profileName="Luis"
            daysAgo="5 mins ago"
            coment="Esquece, pai ta chato"
          />

          <Comentario
            profileImage="https://randomuser.me/api/portraits/thumb/men/57.jpg"
            profileName="Osmar"
            daysAgo="2 days ago"
            coment="Show de bola!"
          />

          <Comentario
            profileImage="https://randomuser.me/api/portraits/thumb/women/51.jpg"
            profileName="Camila Fernandes"
            daysAgo="1 days ago"
            coment="Jogou muito!!"
          />

          <Comentario
            profileImage="https://randomuser.me/api/portraits/thumb/men/67.jpg"
            profileName="Tiago"
            daysAgo="3 days ago"
            coment="Que golaço da #$#@"
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default Comentarios;
