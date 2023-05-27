import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions, Modal } from "react-native";
import { styles } from "./styles";
import ProfileImage from "../ProfileImage/ProfileImage";
import RenderImage from "../RenderImage/RenderImage";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

let screenWidth = Dimensions.get("window").width / 100; // screen width

export default function Post(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(0);

  async function getImagesSize() {
    // Use the width and height props to optimize
    await Image.getSize(props.image, (width, height) => {
      setHeight(height);
      setWidth(width);
    })

    setAspectRatio(width / height)
  }

  const ImageStyle = {
    style: [
      styles.postImage,
      props.image ?
        aspectRatio >= 1 ?
          { height: (90 * screenWidth / aspectRatio) }
          : { height: 450 }
        : { height: 0 }
    ]
  }

  useEffect(() => {
    // if image is empty it doesnt call function
    props.image && getImagesSize();
  })

  return (
    <View style={styles.postContainer}>
      
      <View style={styles.post}>

        <View style={styles.userInfoContainer}>

          <View style={styles.profileContainer}>

            <TouchableOpacity onPress={() => props.goToProfile()}>
              <ProfileImage profileImage={props.profileImage} />
            </TouchableOpacity>

            <View style={{ marginLeft: 10 }}>

              <TouchableOpacity onPress={() => props.goToProfile()}>
                <Text style={styles.profileName}>{props.nickname}</Text>
              </TouchableOpacity>

              <Text style={styles.postDate}>{props.created_at}</Text>

            </View>

          </View>

          {/* <TouchableOpacity onPress={() => props.goToReportScreen()}>
            <Text style={styles.complaint}>!</Text>
          </TouchableOpacity> */}

        </View>

        <TouchableOpacity activeOpacity={0.7} onPress={() => props.goToSeePostScreen()}>
          <RenderImage
            style=
            {
              ImageStyle.style
            }
            url={
              props.image ? { uri: props.image } : ''
            }
            id={props.id}
          />
        </TouchableOpacity>

        <Text style={styles.postDescription}>{props.caption}</Text>

        <View style={styles.postInteraction}>
          <TouchableOpacity onPress={props.likePost} style={styles.postInteractionImage}>
            <AntDesign name="like1" size={28} color={props.userLikedPost == 0 ? "#FFF" : "#FF6709"} />
            <Text style={styles.interactionQuantity}>{props.likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.goToCommentScreen()} style={styles.postInteractionImage}>
            <Ionicons name="chatbubble" size={28} color="#FFF" />
            <Text style={styles.interactionQuantity}>{props.comments}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => alert("Implementações Futuras!")}
            style={styles.postInteractionImage}
          >
            <FontAwesome name="share" size={28} color="#FFF" />
            <Text style={styles.interactionQuantity}>{props.updated}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}