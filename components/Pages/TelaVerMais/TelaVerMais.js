import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../Header/Header';

import TagName from '../../VerMaisTags/VerMaisTags';
import TagEvent from '../../VerMaisEventos/VerMaisEventos';

import { styles } from './style'

function TelaVerMais({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ver mais</Text>
      </View>

      <View style={styles.containerTags}>
        <Text style={styles.titleTags}>Tags</Text>

        <View style={styles.tags} >
          <TagName nameTag="#futebol" />
        </View>

      </View>

      <View style={styles.containerPhotos}>
        <Text style={styles.titlePhotos}>Fotos</Text>

        <View style={styles.photos}>
          <View style={styles.photo}></View>
          <View style={styles.photo}></View>
          <View style={styles.photo}></View>
        </View>

        {/* props das fotos */}

      </View>


      <View style={styles.containerEvents}>

        <View style={styles.containerEventsTitle}>
          <Text style={styles.titleEvents}>Meus eventos</Text>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Meus Eventos') }}
          >
            <Text style={styles.seeMoreEvents}>...</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.events}>
          <TagEvent nameEvent="Evento 0" />
        </View>
      </View>

    </ScrollView>
  )
}

export default TelaVerMais;