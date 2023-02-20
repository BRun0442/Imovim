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

function Post(props){
    return (
      <View style={styles.postBackground}>
          <View style={styles.postContainer}>

            <View style={styles.postProfile}>
              <ProfileImage profileImage={props.profileImage} />

              <View style={styles.profileContainer}>
                <Text style={styles.profileName}>{props.profileName}</Text>
                <Text style={styles.postDate}>{props.postDate}</Text>
              </View>
            </View>

            <View>
              <Image style={styles.postImage} source={{ uri: props.postImage }} />
            </View>

            <Text style={styles.postDescription}>{props.postDescription}</Text>

            <View style={styles.postInteraction}>
              <TouchableOpacity onPress={props.likeFunction} style={styles.postInteractionImage}>
                <AntDesign name="like1" size={24} color="white" />
                <Text style={styles.interactionQuantity}>{props.likeQuantity}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.postInteractionImage}>
                <Ionicons name="chatbubble" size={24} color="white" />
                <Text style={styles.interactionQuantity}>{props.comentQuantity}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.postInteractionImage}>
                <FontAwesome name="share" size={24} color="white" />
                <Text style={styles.interactionQuantity}>{props.shareQuantity}</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
  )
}

export default Post;
