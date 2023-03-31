import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, StatusBar, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './style'
import { FlatList } from "react-native-gesture-handler";
import Post from '../../Post/Post';
import axios from 'axios';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { getAnotherUserData } from '../../../services/user';
import Header from '../../Header/Header.js'
import { AuthContext } from '../../../contexts/auth';
import likePost from "../../../services/post";
import { AccountDataContext } from '../../../contexts/accountData';

export default function PerfilVisãoExterna({ navigation }, props) {
    const { reloadChats, setReloadChats } = useContext(AuthContext)
    const { id } = useContext(AuthContext);
    const { setPostFocusedId } = useContext(AccountDataContext);
    const [changeIcon, setChangeIcon] = useState(false)

    const { anotherUser_id } = useContext(AuthContext)
    const [profileImage, setProfileImage] = useState()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('s')
    const [currentUser, setCurrentUser] = useState()
    const [posts, setPosts] = useState()

    const handleChatButton = () => {
        const data = {
            user_id: id,
            friend_id: anotherUser_id
        }
        axios.post(`https://imovim-api.cyclic.app/chat/create-room`, data)
            .then(() => {
                setReloadChats(reloadChats + 1)
                navigation.navigate('Mensagens')
            })
    }

    const getUserData = async () => {
        const data = await getAnotherUserData(anotherUser_id, id)
        console.log(data)
        console.log(data.profileInfo[0].profileImage)
        setProfileImage(data.profileInfo[0].profileImage)
        setLocation(data.profileInfo[0].localization)
        setName(data.profileInfo[0].nickname)
        setCurrentUser(data.profileInfo[0].user_id)
        setPosts(data.userPosts)
        return data
    }

    useEffect(() => {
        getUserData()
    }, [anotherUser_id])

    if (anotherUser_id !== currentUser) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    function handleClick() {
        handleChatButton();
        // navigation.navigate("Chat");
    }

    return (
        <FlatList style={styles.container}
            data={posts}
            renderItem={({ item }) => (
                <Post
                    goToCommentScreen={() => {
                        setPostFocusedId(item.id);
                        navigation.navigate("Comentarios");
                    }}
                    likePost={async () => {
                        await likePost(id, item.id);
                        await getUserData()
                    }}
                    {...item}
                />
            )}
            ListHeaderComponent={
                <SafeAreaView>
                    <Header navigation={navigation} />

                    <View style={styles.background} />

                    <View style={styles.perfil}>

                        <View style={styles.iconsContainer}>
                            {!profileImage && <View style={styles.iconCam}>
                                <Entypo name="camera" size={22} color="white" />
                            </View>}

                            {profileImage && <Image style={styles.profileImage} source={{ uri: profileImage }} />}

                            <View style={styles.addFriendContainer}>
                                <View>
                                    <TouchableOpacity
                                        style={styles.followButton}
                                        onPress={() => setChangeIcon(!changeIcon)}
                                    >
                                        {
                                            changeIcon ?
                                                <View style={styles.addFriendsIcons}>
                                                    <FontAwesome5 name="user-check" size={24} color="#FFF" />
                                                    <Text style={styles.addFriendText}>Seguindo</Text>
                                                </View>
                                                :
                                                <View style={styles.addFriendsIcons} >
                                                    <Ionicons name="person-add" size={24} color="#FFF" />
                                                    <Text style={styles.addFriendText}>Seguir</Text>
                                                </View>

                                        }
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.iconsActions}>
                                    <TouchableOpacity>
                                        <Ionicons name="alert-circle" size={28} color="#F8670E" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Entypo name="block" size={24} color="#F8670E" style={{ marginLeft: 8, marginRight: 8 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleClick()}>
                                        <Ionicons name="chatbubble" size={25} color="#F8670E" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.infos}>

                            <View style={styles.data}>
                                <Text style={styles.name}>{name}</Text>
                                <Text style={styles.location}>{location}</Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.border}></View>

                    <View style={styles.tags}>
                        <Text style={styles.tagsText}>
                            #Adicione seus esportes favoritos
                        </Text>
                    </View>

                </SafeAreaView>
            }
        />

    );
}