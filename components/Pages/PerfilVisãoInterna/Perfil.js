import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { styles } from './style'
import TopBar from '../../TopBar/TopBar';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Foundation } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../Header/Header'
import Post from '../../Post/Post';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

{/* <FontAwesome5 name="user-check" size={24} color="black" /> */ }
// icone para quando a pessoa clicar em adicionar não sei por sapoha Ainda...
import { AuthContext } from '../../../contexts/auth';

export default function PerfilVisãoInterna({ navigation }, props) {
    
    const { profilePicture } = useContext(AuthContext)
    const [visible, setVisible] = useState(false)
    // const { accountData } = navigation.params;

    function verifyProfileImage()
    {
        // console.log('props:', props.accountData);
        console.log('account data:', navigation.params);
        
        
        // console.log(accountData.profileInfo.profileBackground)
        
        // if(props.accountData.profileInfo.profileBackground)
        // {
        //     return (
        //         <Image 
        //             source={{uri: props.accountData.profileInfo.profileBackground}}
        //         />
        //     )
        // }else{
        //     return <Entypo name="camera" size={22} color="#FFF" />
        // }
    }

    return (
        <ScrollView style={styles.container}>
            <Header />

            <View style={styles.background} />

            <View style={styles.perfil}>

                <View style={styles.icons}>
                    <View style={styles.iconCam}>
                        <Image 
                            style =
                            {
                                {
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 100
                                }
                            }
                            source={{uri: profilePicture || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}} 
                        /> 
                    </View>
                    <TouchableOpacity style={styles.iconPencil}
                        onPress={() => { navigation.navigate('Editar Perfil') }}
                    >
                        <Foundation name="pencil" size={25} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.infos}>
                    <View style={styles.data}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text style={styles.location}>{props.location}</Text>

                    </View>
                    <View style={styles.seeMore}>
                        <TouchableOpacity style={styles.buttonSeeMore}
                            onPress={() => { navigation.navigate('Ver Amigos') }}>
                            <Ionicons name="person-add" size={20} color="#FFF" />
                            <Text style={styles.textButtonSeeMore}>Ver Amigos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.border}></View>

            <View style={styles.tagsView}>
                <View style={styles.tags}>
                    <Text style={styles.tagsText}>#Adicione seus esportes favoritos</Text>
                </View>

                <View>
                    <View style={styles.editProfile}>
                        <View>
                            <TouchableOpacity
                                style={styles.editProfileButton}
                                onPress={() => { navigation.navigate('Tela Tags') }}
                            >
                                <Foundation name="pencil" size={24} color="#FFF" />
                                <Text style={styles.editProfileText}>Editar Tags</Text>
                            </TouchableOpacity>

                            <View style={styles.whiteLine}></View>

                            <TouchableOpacity
                                style={styles.editProfileButton}
                                onPress={() => { navigation.navigate('Tela Ver Mais') }}
                            >
                                <AntDesign name="eye" size={24} color="#FFF" />
                                <Text style={styles.editProfileText}>Ver Mais</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            onPress={() => setVisible(!visible)}
                            style={{ marginLeft: 15 }}>
                            <Ionicons name="ios-close" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.openEdit}>
                        <TouchableOpacity
                            onPress={() => setVisible(!visible)}
                            style={styles.buttonText}
                        >
                            <Text style={styles.openEditText}>...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.line}></View>

            <View style={styles.posts}>
                <Text style={styles.alert}>Não há nenhuma publicação aqui</Text>
            </View>

            <StatusBar />
        </ScrollView>
    );
}
