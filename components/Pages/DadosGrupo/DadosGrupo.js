import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, Image, FlatList, Modal, TouchableOpacity, Touchable } from 'react-native';
import Header from '../../Header/Header';
import { styles } from './style';

import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import MembersGroup from "../../MembersGroup/MembersGroup"
import IconRemoveGroup from "../../Modals/IconExitGroup"

export default function DadosGrupo({ navigation }, props) {

  const [visibleModal, setVisibleModal] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />

      <View style={{ paddingHorizontal: 15 }}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Dados do grupo</Text>
        </View>

        <View style={styles.dataGroup}>

          <View style={styles.photoGroup}>
            <MaterialIcons name="group" size={35} color="#ADADAD" />
            {/* <Image /> */}
          </View>

          <View>
            <Text style={styles.groupName}>{props.groupName}</Text>
          </View>

          <TouchableOpacity style={styles.icon}>
            <Foundation name="pencil" size={24} color="black" />
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

          <View>
            <Text style={styles.describeTitle}>Descrição</Text>
            <Text style={styles.describe}>Escreva uma descrição aqui</Text>
          </View>

          <Foundation name="pencil" size={24} color="black"
            style={styles.icon} />

        </View>

        <View style={styles.members}>

          <View style={styles.titleContainerMembers}>
            <Text style={styles.titleMembers}>Participantes</Text>
          </View>

          <View style={styles.memberListView}>

            <FlatList
              data={[1]}
              style={{ height: "100%" }}
              renderItem={({ item }) =>
                <View>
                  <MembersGroup memberName="Tiago" />
                  <MembersGroup memberName="Lulu" />
                  <MembersGroup memberName="Osmarito" />

                  <MembersGroup memberName="Tiago" /><MembersGroup memberName="Lulu" /><MembersGroup memberName="Osmarito" />
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
    </SafeAreaView >
  )
}