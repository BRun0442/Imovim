import React, {useState} from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native"
import { styles } from './style.js'

import { Entypo } from '@expo/vector-icons';
import ProfileImage from ".././ProfileImage/ProfileImage";
import BlockUserModal from "../Modals/BlockUserModal";

export default function UserBlock({ nickname, profileImage, getUsersBlocked }) {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleModalVisible = () => {
    setVisibleModal(!visibleModal);
  };

  return (
    <View style={styles.container}>

      <View style={styles.userInfo}>
        <ProfileImage profileImage={profileImage} />
        <Text style={styles.name}>{nickname}</Text>
      </View>

      <TouchableOpacity onPress={()=> setVisibleModal(true)}>
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
        />
      </Modal>

    </View>
  )
}