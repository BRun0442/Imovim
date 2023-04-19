import React, {useContext, useState} from "react";
import { TouchableOpacity, Modal, } from "react-native";

import EditComentModal from "../Modals/EditComentModal";
import { AuthContext } from "../../contexts/auth";
import ComentContent from "./ComentContent";

export default function Comentario(props) {
  const [visibleModal, setVisibleModal] = useState(false)
  const { id } = useContext(AuthContext)

  if (props.user_id == id) {
    return (
      <TouchableOpacity
        onLongPress={() => setVisibleModal(props.user_id == id ? true : false)}
      >
        
        <ComentContent 
          comment_id={props.comment_id}
          user_id={props.user_id}
          profileImage={props.profileImage}
          profileName={props.profileName}
          daysAgo={props.daysAgo}
          coment={props.coment}
          updated={props.updated}
        />
  
        <Modal
          visible={visibleModal}
          transparent={true}
          onRequestClose={() => setVisibleModal(false)}
        >
          <EditComentModal
            coment={props.coment}
            getComments={props.getComments}
            comment_id={props.comment_id}
            handleClose={() => setVisibleModal(false)}
          />
        </Modal>
  
      </TouchableOpacity>
    );
  } else {
    return (
      <ComentContent 
          comment_id={props.comment_id}
          user_id={props.user_id}
          profileImage={props.profileImage}
          profileName={props.profileName}
          daysAgo={props.daysAgo}
          coment={props.coment}
          updated={props.updated}
        />
    )
  }
}