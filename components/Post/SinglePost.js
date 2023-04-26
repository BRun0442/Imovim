import React, { useState, useEffect, useContext } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions, Modal } from "react-native";
import { styles } from "./styles";
import ProfileImage from "../ProfileImage/ProfileImage";
import RenderImage from "../RenderImage/RenderImage";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ComplaintModal from "../Modals/ComplaintModal";
import { AuthContext } from "../../contexts/auth";

let screenWidth = Dimensions.get("window").width / 100; // screen width

export default function SinglePost(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(0);
  const { id, currentPost, setAnotherUser_id } = useContext(AuthContext)

  const [visibleModal, setVisibleModal] = useState(false)

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
  }, [currentPost])

  return (
    <View style={styles.postContainer}>

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

        <TouchableOpacity onPress={() => setVisibleModal(true)}>
          <Text style={styles.complaint}>!</Text>
        </TouchableOpacity>

      </View>

      <View>

        <Modal
          visible={visibleModal}
          transparent={true}
          onRequestClose={() => setVisibleModal(false)}
        >
          <ComplaintModal
            handleClose={() => setVisibleModal(false)}
          />
        </Modal>

      </View>

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

      <Text style={styles.postDescription}>{props.caption}</Text>

    </View>
  )
}