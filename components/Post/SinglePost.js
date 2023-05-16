import React, { useState, useEffect, useContext } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions, Modal } from "react-native";
import { styles } from "./styles";
import ProfileImage from "../ProfileImage/ProfileImage";
import RenderImage from "../RenderImage/RenderImage";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/auth";

import EditPhotoModal from "../Modals/EditPhotoModal";
import EditCaptionModal from "../Modals/EditCaptionModal";

import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

let screenWidth = Dimensions.get("window").width / 100; // screen width

export default function SinglePost(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(0);
  const { id, currentPost, setAnotherUser_id } = useContext(AuthContext)

  const [visibleModal, setVisibleModal] = useState(false)
  const [visible, setVisible] = useState(false)

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

        {
          visible === false ? (
            <TouchableOpacity
              onPress={() => setVisible(true)}
            // onPress={() => setVisibleModal(true)}
            >
              <AntDesign name="ellipsis1" size={22} color="000" />
            </TouchableOpacity>
          )

            :

            (
              <View style={styles.editPhotoOptions} >

                <View style={styles.options}>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => {
                      setVisibleModal(true)
                      setVisible(false)
                    }
                    }
                  >
                    <Foundation name="pencil" size={27} color="#FFF" />
                    <Text style={styles.textButton}>Editar legenda</Text>
                  </TouchableOpacity>

                  <View style={styles.line} />

                  <TouchableOpacity onPress={() => deletePost()} style={styles.option}>
                    <MaterialIcons name="delete" size={30} color="#FFF" />
                    <Text style={styles.textButton}>Excluir foto</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.closeIcon} onPress={() => setVisible(false)}>
                  <Ionicons name="close" size={30} color="#FFF" />
                </TouchableOpacity>

              </View>
            )
        }

        <Modal
          visible={visibleModal}
          transparent={true}
          onRequestClose={() => setVisibleModal(false)}
        >
          <EditCaptionModal handleClose={() => setVisibleModal(false)} />
        </Modal>

        {/* <Modal
          visible={visibleModal}
          transparent={true}
          onRequestClose={() => setVisibleModal(false)}
        >
          <EditPhotoModal
            handleClose={() => setVisibleModal(false)}
          />
        </Modal> */}

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