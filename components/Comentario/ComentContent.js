import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity, Modal, } from "react-native";
import { styles } from "./styles";

import ProfileImage from '../ProfileImage/ProfileImage';
import EditComentModal from "../Modals/EditComentModal";
import { AuthContext } from "../../contexts/auth";

function ComentContent(props) {
  const [visibleModal, setVisibleModal] = useState(false)
  const { id } = useContext(AuthContext)

  return (
    <View
      style={styles.comentContainer}
    >

      <View
        style={styles.comentProfile}
      >
        <ProfileImage profileImage={props.profileImage} />

        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>{props.profileName}</Text>
          <Text style={styles.daysAgo}>{props.daysAgo}</Text>
        </View>
      </View>

      <Text style={styles.coment}>{props.coment}</Text>

    </View>
  );
}

export default ComentContent;
