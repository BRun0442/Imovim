import React, { useState, useEffect } from "react";
import {Text, View, TouchableOpacity, Image, Dimensions} from "react-native";
import { styles } from "./styles";
import ProfileImage from "../ProfileImage/ProfileImage";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

let screenWidth = Dimensions.get("window").width/100; // screen width

function Post(props){
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(0);

  async function getImagesSize()
  {
    // Use the width and height props to optimize
    await Image.getSize(props.image, (width, height) => 
    {
      setHeight(height); 
      setWidth(width);
    })

    setAspectRatio(width/height)
  }

  useEffect(() => {
    // if image is empty it doesnt call function
    props.image && getImagesSize();
  })

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

            <Image 
            style =
            {
              [
                styles.postImage, 
                props.image ? 
                aspectRatio >= 1 ? 
                  {height: (90 * screenWidth / aspectRatio)} 
                  : {height: 450}
                : {height: 0}
              ]
            } 
              source={
                props.image ? { uri: props.image } : ''
              } 
            />

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
