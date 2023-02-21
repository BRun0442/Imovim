import React, { useState, Component } from "react";
import { render } from "react-dom";
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

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Line from '../Line/Line';

function Post(props){
    return (
      <View style={styles.postBackground}>
          <View style={styles.postContainer}>

            <View style={styles.postProfile}>
              <ProfileImage profileImage={props.profileImage} />

              <View style={styles.profileContainer}>
                <Text style={styles.profileName}>{props.nickname}</Text>
                <Text style={styles.postDate}>{props.created_at}</Text>
              </View>
            </View>

            <View>
              <Image style={styles.postImage} source={{ uri: props.image }} />
            </View>

            <Text style={styles.postDescription}>{props.caption}</Text>

            <View style={styles.postInteraction}>
              <TouchableOpacity onPress={props.likePost} style={styles.postInteractionImage}>
                <AntDesign name="like1" size={24} color="white" />
                <Text style={styles.interactionQuantity}>{props.likes}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.postInteractionImage}>
                <Ionicons name="chatbubble" size={24} color="white" />
                <Text style={styles.interactionQuantity}>{props.comments}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.postInteractionImage}>
                <FontAwesome name="share" size={24} color="white" />
                <Text style={styles.interactionQuantity}>{props.updated}</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
  )
}

export default Post;
