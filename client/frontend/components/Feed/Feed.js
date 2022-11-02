import React from 'react'
import { View, Text, Button, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native'
import { auth } from '../../firebase/config'
import { signOut } from 'firebase/auth'
import { styles } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// https://oblador.github.io/react-native-vector-icons/
// hand-peace-variant
// comment
// share

function Feed() {
  const img = 'https://i0.wp.com/jornal.usp.br/wp-content/uploads/2020/10/20201027_00_corinthians_torcida.jpg?w=1200&ssl=1'
  const posts = [
    { name: 'Luis Felipe', profileImg: img, created_at: 'hh/mm. quinta 28 de out', caption: 'Futebol é realmente uma paixão de outras vidas, Mais uma vitoria pra conta no jogo hoje', comments: 3, likes: 10, postImg: img },
    { name: 'Tiago Silva', profileImg: '', created_at: 'hh/mm. quinta 28 de out', caption: 'Futebol é realmente uma paixão de outras vidas, Mais uma vitoria pra conta no jogo hoje', comments: 3, likes: 10, postImg: img },
    { name: 'Camila Piovesan', profileImg: img, created_at: 'hh/mm. quinta 28 de out', caption: 'Futebol é realmente uma paixão de outras vidas, Mais uma vitoria pra conta no jogo hoje', comments: 3, likes: 10, postImg: img },
    { name: 'Osmar Guideli', profileImg: img, created_at: 'hh/mm. quinta 28 de out', caption: 'Futebol é realmente uma paixão de outras vidas, Mais uma vitoria pra conta no jogo hoje', comments: 3, likes: 10, postImg: img },
    { name: 'Osmar Guideli', profileImg: img, created_at: 'hh/mm. quinta 28 de out', caption: 'Futebol é realmente uma paixão de outras vidas, Mais uma vitoria pra conta no jogo hoje', comments: 3, likes: 10, postImg: img },
  ]

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.contentTop}>
        <View style={styles.header}>
          <View style={styles.content}>
            <Text style={styles.logo}>ii</Text>
            <View style={styles.containerProfile}></View>
          </View>
        </View>

      </View>
      <FlatList
        ListHeaderComponent={
          <View style={styles.containerOptions}>
            <View style={styles.options}>
              <TouchableOpacity>
                <MaterialCommunityIcons name="calendar" color={'#fff'} size={26} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons name="camera" color={'#fff'} size={26} />
              </TouchableOpacity>
            </View>
          </View>}
        numColumns={1}
        horizontal={false}
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.containerPost}>
            <View style={styles.postHeader}>

              <View style={styles.profileImg}>
                <Image
                  style={styles.profileImg}
                  source={item.profileImg ? { uri: item.profileImg } : { uri: "https://www.mnhockeyhub.com/app_images/no_photo_neutral.svg?1657912251" }}
                />
              </View>

              <View style={styles.postInfo}>
                <Text style={styles.username}>{item.name}</Text>
                <Text style={styles.created_at}>{item.created_at}</Text>
              </View>

            </View>

            {item.postImg && (
              <View style={styles.containerPostImg}>
                <Image
                  style={styles.postImg}
                  source={{ uri: item.postImg }}
                />
              </View>
            )}

            {item.caption && (
              <View style={styles.captionContainer}>
                <Text style={styles.caption}>{item.caption}</Text>
              </View>
            )}

            <View style={styles.containerBottom}>
              <View style={styles.postInteractions}>
                <View style={styles.icon}>
                  <View style={styles.InteractionNumber}>
                    <Text style={styles.number}>13</Text>
                  </View>
                  <TouchableOpacity>
                    <AntDesign name="like1" size={24} color="white" />
                  </TouchableOpacity>
                </View>
                <View style={styles.icon}>
                  <View style={styles.InteractionNumber}>
                    <Text style={styles.number}>13</Text>
                  </View>
                  <TouchableOpacity>
                    <Ionicons name="chatbubble" size={24} color="white" />
                  </TouchableOpacity>
                </View>
                <View style={styles.icon}>
                  <View style={styles.InteractionNumber}>
                    <Text style={styles.number}>13</Text>
                  </View>
                  <TouchableOpacity>
                    <FontAwesome name="share" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
      <Button
        title='Sair'
        onPress={() => signOut(auth)}
      />
      <StatusBar />
    </View>
  )
}

export default Feed