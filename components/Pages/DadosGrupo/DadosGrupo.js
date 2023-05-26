import React, { useState, useContext, useEffect } from 'react';
import { View, Text, ScrollView, Image, FlatList, Modal, TouchableOpacity } from 'react-native';
import Header from '../../Header/Header';
import { styles } from './style';
import { AuthContext } from '../../../contexts/auth';

import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import api from '../../../services/api';

import MembersGroup from "../../MembersGroup/MembersGroup"
import IconRemoveGroup from "../../Modals/IconExitGroup"

export default function DadosGrupo({ navigation }, props) {
  const { id, groupDescription, setGroupDescription, chatFocusedId, chatNickname, chatProfileImage, messageList, setMessageList, friend_id } = useContext(AuthContext)

  const [visibleModal, setVisibleModal] = useState(false)
  const [groupMembers, setGroupMembers] = useState([])

  const getGroupMembers = async () => {
    api.get(`/chat/get-group-members/${chatFocusedId}`)
      .then((res) => {
        setGroupMembers(res.data)
        console.log(res.data);
      })
  }

  useEffect(() => {
    getGroupMembers()
  }, [chatFocusedId])

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />

      <View style={{ paddingHorizontal: 15 }}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Dados do grupo</Text>

          <View style={styles.addNewMember}>
            <MaterialIcons name="group-add" size={30} color="#FF7926" />
          </View>

        </View>

        <View style={styles.dataGroup}>

          <View style={styles.photoGroup}>
            {chatProfileImage ? (
              <Image style={styles.photoGroup} source={{ uri: chatProfileImage }} />
            ) : (
              <MaterialIcons name="group" size={35} color="#ADADAD" />
            )}
          </View>

          <View>
            <Text>Nome: </Text>
            <Text style={styles.groupName}>{props.groupName}</Text>
          </View>

          <TouchableOpacity style={styles.icon}>
            <Foundation
              name="pencil" size={24} color="#000"
              onPress={() => navigation.navigate('Editar Grupo')}
            />
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

        <View style={styles.descGroup}>

          <View style={{ paddingVertical: 10 }}>
            <Text style={styles.describeTitle}>Descrição</Text>
            <Text style={styles.describe}>{groupDescription}</Text>
          </View>

          <Foundation name="pencil" size={24} color="#000"
            style={styles.icon}
          // onPress={() => navigation.navigate('Editar Grupo')}
          />

        </View>

        <View style={styles.members}>

          <View style={styles.titleContainerMembers}>
            <Text style={styles.titleMembers}>Participantes</Text>
          </View>

          <View style={styles.memberListView}>

            <FlatList
              data={groupMembers}
              style={{ height: "100%" }}
              renderItem={({ item }) =>
                <View>
                  <MembersGroup memberName={item.nickname} profileImage={item.profileImage} />
                </View>
              }
            />
          </View>

        </View>

        <View style={styles.closedButtonContainer}>

          <TouchableOpacity
            style={styles.closedButton}
            onPress={() => setVisibleModal(true)}
          >
            <Text style={styles.textButton}>Sair</Text>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView >
  )
}