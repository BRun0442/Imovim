import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../Header/Header';
import { styles } from './style'

function TelaVerMais() {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ver mais</Text>
      </View>

      <View style={styles.containerTags}>
        <Text style={styles.titleTags}>Tags</Text>

        <View style={styles.tags} >
          <Text style={styles.tag}>#futebol</Text>
          <Text style={styles.tag}>#natação</Text>
          <Text style={styles.tag}>#judô</Text>
          <Text style={styles.tag}>#musculação</Text>

          {/* props das tags */}

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
        <Text style={styles.titleEvents}>Meus eventos</Text>
        <Text style={styles.events}>Evento 1</Text>
        <Text style={styles.events}>Evento 2</Text>
        <Text style={styles.events}>Evento 3</Text>
        {/* props das fotos */}
      </View>

    </ScrollView>
  )
}

export default TelaVerMais;