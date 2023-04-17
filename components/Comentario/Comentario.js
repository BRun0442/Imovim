import React, {useState} from "react";
import { Text, View, TouchableOpacity, Modal, } from "react-native";
import { styles } from "./styles";

import ProfileImage from '../ProfileImage/ProfileImage';
import EditComentModal from "../Modals/EditComentModal";

function Comentario(props) {
  const [visibleModal, setVisibleModal] = useState(false)

  return (
    <TouchableOpacity
      onLongPress={() => setVisibleModal(true)}
      style={styles.comentContainer}
    >

      <View style={styles.comentProfile}>
        <ProfileImage profileImage={props.profileImage} />

        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>{props.profileName}</Text>
          <Text style={styles.daysAgo}>{props.daysAgo}</Text>
        </View>
      </View>

      <Text style={styles.coment}>{props.coment}</Text>

      <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={() => setVisibleModal(false)}
      >
        <EditComentModal
          handleClose={() => setVisibleModal(false)}
        />
      </Modal>

    </TouchableOpacity>
  );
}

export default Comentario;
