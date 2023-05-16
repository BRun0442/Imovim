import React, { useState, useEffect, useContext } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions, Modal } from "react-native";
import { styles } from "./styles";
import ProfileImage from "../ProfileImage/ProfileImage";
import RenderImage from "../RenderImage/RenderImage";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/auth";
import EditPhotoModal from "../Modals/EditPhotoModal";

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
    <View style={styles.singlePostContainer}>

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
          <AntDesign name="ellipsis1" size={22} color="000" />
        </TouchableOpacity>

        <Modal
          visible={visibleModal}
          transparent={true}
          onRequestClose={() => setVisibleModal(false)}
        >
          <EditPhotoModal
            handleClose={() => setVisibleModal(false)}
          />
        </Modal>


      </View>

      <Image
        style=
        {
          ImageStyle.style
        }
        source={
          props.image ? { uri: props.image } : ''
        }
      />

      <Text style={styles.postDescription}>{props.caption}</Text>

    </View>
  )
}