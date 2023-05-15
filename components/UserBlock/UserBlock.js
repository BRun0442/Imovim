import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native"
import { styles } from './style.js'
import { AuthContext } from "../../contexts/auth.js";

import { Entypo } from '@expo/vector-icons';
import ProfileImage from ".././ProfileImage/ProfileImage";
import BlockUserModal from "../Modals/BlockUserModal";

export default function UserBlock({ nickname, profileImage, getUsersBlocked, blocked_user_id, navigation }) {
  const [visibleModal, setVisibleModal] = useState(false);
  const { id } = useContext(AuthContext)

  const handleModalVisible = () => {
    setVisibleModal(!visibleModal);
  };

  return (
    <View style={styles.container}>

      <View style={styles.userInfo}>
        <ProfileImage profileImage={profileImage} />
        <Text style={styles.name}>{nickname}</Text>
      </View>

      <TouchableOpacity onPress={() => setVisibleModal(true)}>
        <Entypo name="block" size={24} color="#FF7926" />
      </TouchableOpacity>

      <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={() => setVisibleModal(false)}
      >
        <BlockUserModal
          handleClose={handleModalVisible}
          getUsersBlocked={getUsersBlocked}

          blocked_user_id={blocked_user_id}
          user_id={id}
          changeBlock={false}
          name={nickname}
          navigation={navigation}
        />
      </Modal>

    </View>
  )
}