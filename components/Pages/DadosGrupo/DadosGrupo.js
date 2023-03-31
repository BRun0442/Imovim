import React from 'react';
import { SafeAreaView, View, Text, ScrollView, Image, FlatList } from 'react-native';
import Header from '../../Header/Header';
import { styles } from './style';

import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import MembersGroup from "../../MembersGroup/MembersGroup"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DadosGrupo({ navigator }, props) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

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

          <Foundation style={styles.icon} name="pencil" size={24} color="black" />
        </View>

        <View style={styles.descGroup}>

          <View>
            <Text style={styles.describeTitle}>Descrição</Text>
            <Text style={styles.describe}>Escreva uma descrição aqui</Text>
          </View>

          <Foundation style={styles.icon} name="pencil" size={24} color="black" />
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
                  <MembersGroup memberName="Tiago" /><MembersGroup memberName="Tiago" /><MembersGroup memberName="Tiago" />
                </View>
              }
            />
          </View>

        </View>

        <View style={styles.closedButtonContainer}>
          <TouchableOpacity style={styles.closedButton}>
            <Text style={styles.textButton}>Sair</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView >
  )
}