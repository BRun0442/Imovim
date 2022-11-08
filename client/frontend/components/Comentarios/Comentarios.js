import React from 'react'
import { View, Text, TouchableOpacity, StatusBar, FlatList, Image } from 'react-native'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import moment from "moment"

function Comentarios() {
    const img = 'https://i0.wp.com/jornal.usp.br/wp-content/uploads/2020/10/20201027_00_corinthians_torcida.jpg?w=1200&ssl=1'
    const comments = [
        { name: 'Luis Felipe', profileImg: img, created_at: '2022/11/1', comment: 'Sensacionaaaaal, aquele atacante simplesmente arrasou, vitória merecida, sou um grande fã!!!'},
        { name: 'Camila Piovesan', profileImg: img, created_at: '2022/11/1', comment: 'Na próxima quero ver'},
        { name: 'Osmar Guideli', profileImg: img, created_at: '2022/11/1', comment: 'Parabéns!!!!!'},
        { name: 'Tiago Silva', profileImg: img, created_at: '2022/11/1', comment: 'Aí sim!'},
        { name: 'Geraldo', profileImg: img, created_at: '2022/11/1', comment: 'Show!!!'},
        { name: 'Tomás', profileImg: img, created_at: '2022/11/1', comment: 'Boaaaaaaa'},
      ]

  return (
    <View style={{backgroundColor: '#ededed', height: '100%'}}>
        <View style={styles.header}>
            <View style={styles.container1}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{zIndex: 1}}>
                        <AntDesign name="like1" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.number}>13</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{zIndex: 1}}>
                        <Ionicons name="chatbubble" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.number}>13</Text>
                </View>
            </View>

            <View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{zIndex: 1}}>
                        <FontAwesome name="share" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.number}>13</Text>
                </View>
            </View>
        </View>

        <View style={styles.comments}>
            <FlatList
                ListHeaderComponent={
                    <View style={{height: 12}} />
                }
                style={styles.flatList}
                numColumns={1}
                horizontal={false}
                data={comments}
                renderItem={({item}) => (
                    <View style={styles.containerComment}>
                        <View style={styles.center}>
                            <View style={styles.top}>
                                <View style={styles.containerProfileImg}>
                                    <Image
                                        style={styles.profileImg}
                                        source={{ uri: item.profileImg }}
                                    />
                                </View>

                                <View style={styles.complement}>
                                    <Text>{item.name}</Text>
                                    <Text style={{color: '#8f8989'}}>{moment(item.created_at).fromNow()}</Text>
                                </View>
                            </View>

                            <View style={styles.containerContent}>
                                <Text style={styles.content}>{item.comment}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
        <StatusBar />
    </View>
  )
}

export default Comentarios