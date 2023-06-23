import React, { useState, useContext, useEffect } from 'react';
import { View, Text, ScrollView, Image, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './style';

import { showToastSuccess } from '../../Toast/Toast'

import Header from '../../Header/Header';
import MembersGroup from "../../MembersGroup/MembersGroup";
import ExitGroup from "../../Modals/IconExitGroup";

import api from '../../../services/api';
import { AuthContext } from '../../../contexts/auth';

import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default function DadosGrupo({ navigation }, props) {
  const { id, groupDescription, reloadChats, setReloadChats, setGroupDescription, chatFocusedId, chatNickname, chatProfileImage, messageList, setMessageList, friend_id } = useContext(AuthContext)

  const [visibleModal, setVisibleModal] = useState(false)
  const [groupMembers, setGroupMembers] = useState([])

  const getGroupMembers = async () => {
    api.get(`/chat/get-group-members/${chatFocusedId}`)
      .then((res) => {
        setGroupMembers(res.data)
        console.log(res.data);
      })
  }

  const exitGroup = async () => {
    try {
      const { data } = await api.delete(`/chat/exit-room/${chatFocusedId}/${id}`)
      console.log(data);
      showToastSuccess(data.msg)
      setReloadChats(reloadChats + 1)
      navigation.navigate('Mensagens')
    } catch(err) {
      console.log(err);
    }
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

          {/* <TouchableOpacity
            // onPress={() => navigation.navigate('Adicionar Participante')}
            style={styles.addNewMember}>
            <MaterialIcons name="group-add" size={30} color="#FF7926" />
          </TouchableOpacity> */}

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
            <Text style={styles.groupNameText}>Nome do Grupo: </Text>
            <Text style={styles.groupName}>{chatNickname}</Text>
          </View>

          {/* <TouchableOpacity style={styles.icon}>
            <Foundation
              name="pencil" size={24} color="#000"
              onPress={() => navigation.navigate('Editar Grupo')}
            />
          </TouchableOpacity> */}

          <Modal
            visible={visibleModal}
            transparent={true}
            onRequestClose={() => setVisibleModal(false)}
          >
            <ExitGroup
              handleClose={() => setVisibleModal(false)}
              exitGroup={exitGroup}
              chatNickname={chatNickname}
            />
          </Modal>
        </View>

        <View style={styles.descGroup}>

          <View style={{ paddingVertical: 10 }}>
            <Text style={styles.describeTitle}>Descrição</Text>
            <Text style={styles.describe}>{groupDescription}</Text>
          </View>

          {/* <Foundation name="pencil" size={24} color="#000"
            style={styles.icon}
            onPress={() => navigation.navigate('Editar Grupo')}
          /> */}

        </View>

        <View style={styles.members}>

          <View style={styles.titleContainerMembers}>
            <Text style={styles.titleMembers}>Participantes</Text>
          </View>

          <View style={{ paddingVertical: 10 }}>

            <FlatList
              data={groupMembers}
              renderItem={({ item }) =>
                <View>
                  <MembersGroup
                    chatNickname={chatNickname}
                    memberName={item.nickname}
                    profileImage={item.profileImage}
                  />
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