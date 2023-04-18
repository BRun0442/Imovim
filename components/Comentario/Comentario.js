import React, {useContext, useState} from "react";
import { Text, View, TouchableOpacity, Modal, } from "react-native";
import { styles } from "./styles";

import ProfileImage from '../ProfileImage/ProfileImage';
import EditComentModal from "../Modals/EditComentModal";
import { AuthContext } from "../../contexts/auth";

function Comentario(props) {
  const [visibleModal, setVisibleModal] = useState(false)
  const { id } = useContext(AuthContext)

  return (
    <TouchableOpacity
      onLongPress={() => setVisibleModal(props.user_id == id ? true : false)}
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
          comment_id={props.comment_id}
          handleClose={() => setVisibleModal(false)}
        />
      </Modal>

    </TouchableOpacity>
  );
}

export default Comentario;
