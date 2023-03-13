import React, { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../Header/Header';
import { styles } from './style'

import TagName from '../../VerMaisTags/VerMaisTags';
import Photo from '../../Photo/Photo';
import TagEvent from '../../VerMaisEventos/VerMaisEventos';

import { AuthContext } from '../../../contexts/auth.js';
import { getSportsPracticed as getSportsData } from '../../../services/sports'

export default function TelaVerMais({ navigation }) {

  const { id } = useContext(AuthContext);

  const [sportsPracticed, setSportsPracticed] = useState(null)

  const getSportsPracticed = async () => {
    const data = await getSportsData(id)
    setSportsPracticed(data)
    console.log(data)
    return data
  }

  useEffect(() => {
    getSportsPracticed()
  }, [])

  if (!sportsPracticed) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ver mais</Text>
      </View>

      <View style={styles.containerTags}>
        <Text style={styles.titleTags}>Tags</Text>

        <View style={styles.tags} >
          {sportsPracticed.map((i) => {
            console.log(i);
            return (
              <TagName nameTag={i}/>
            )
          })}
        </View>
      </View>

      <View style={styles.containerPhotos}>

        <View style={styles.containerPhotoTitle}>

          <Text style={styles.titlePhotos}>Fotos</Text>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Fotos') }}
          >
            <Text style={styles.seeMorePhotos}>...</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.photos} horizontal={true}>
          <Photo />
          <Photo />
          <Photo />
          <Photo />
        </ScrollView>

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