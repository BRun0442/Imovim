import React, {useState} from 'react';
import { SafeAreaView, View, Text, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import { styles } from './style';

import { MaterialIcons } from '@expo/vector-icons';

import IconRemoveGroup from '../Modals/IconRemoveGroup';

export default function DadosGrupo(props) {

  const [visibleModal, setVisibleModal] = useState(false)

  return (
    <View style={styles.infoMemberContainer}>

      <View style={styles.infoMember}>
          <Image style={styles.photoMember} source={{ uri: props.profileImage }} />

        <Text style={styles.membersName}>{props.memberName}</Text>
      </View>

      <View style={styles.icons}>
        <TouchableOpacity onPress={()=> setVisibleModal(true)}>
          <MaterialIcons style={{ marginRight: 10 }} name="person-remove" size={35} color="#FF7926" />
        </TouchableOpacity>

        <Modal
          visible={visibleModal}
          transparent={true}
          onRequestClose={() => setVisibleModal(false)}
        >
          <IconRemoveGroup
            handleClose={() => setVisibleModal(false)}
          />
        </Modal>

      </View>
    </View>
  )
}