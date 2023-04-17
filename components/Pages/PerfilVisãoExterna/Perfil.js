import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, StatusBar, Alert, TouchableOpacity, SafeAreaView, Modal, FlatList, ScrollView } from 'react-native';
import { styles } from './style'
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
import Toast from 'react-native-toast-message'
import { toastConfig } from '../../Toast/toastConfig';
import { showToastSuccess } from '../../Toast/Toast';

import BlockUserModal from '../../Modals/BlockUserModal';

export default function PerfilVisãoExterna({ navigation }, props) {
    const { reloadChats, setReloadChats } = useContext(AuthContext)
    const { id } = useContext(AuthContext);
    const { setPostFocusedId } = useContext(AccountDataContext);
    const [changeIcon, setChangeIcon] = useState(false)

    const { anotherUser_id } = useContext(AuthContext)
    const [sportsPracticed, setSportsPracticed] = useState()
    const [profileImage, setProfileImage] = useState()
    const [backgroundImage, setBackgroundImage] = useState()
    const [name, setName] = useState('')
    const [location, setLocation] = useState(null)
    const [currentUser, setCurrentUser] = useState()
    const [posts, setPosts] = useState()
    const [friendShipExists, setfriendShipExists] = useState()
    const [userIdWhoSentSolicitation, setUserIdWhoSentSolicitation] = useState()

    const [visibleModal, setVisibleModal] = useState(false)

    const handleChatButton = () => {
        const data = {
            user_id: parseInt(id),
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
        setBackgroundImage(data.profileInfo[0].profileBackground)
        setLocation(data.profileInfo[0].localization)
        setName(data.profileInfo[0].nickname)
        setfriendShipExists(data.profileInfo[0].pending)
        setCurrentUser(data.profileInfo[0].user_id)
        setUserIdWhoSentSolicitation(data.profileInfo[0].userIdWhoSentSolicitation)
        setPosts(data.userPosts)
        setSportsPracticed(data.sportsPracticed)
        return data
    }

    const handleFriendship = async () => {
        const data = { user_id: id, friend_id: currentUser }
        if (friendShipExists === null) {
            await axios.post(`https://imovim-api.cyclic.app/friendShip/send-solicitation`, data)
                .then((res) => {
                    getUserData()
                    showToastSuccess(`${res.data.msg} ${name}!`, "")
                })
        }

        else if (friendShipExists === 1 && userIdWhoSentSolicitation != id) {
            await axios.post(`https://imovim-api.cyclic.app/friendShip/accept-solicitation`, data)
                .then(async (res) => {
                    await getUserData()
                    showToastSuccess(`${res.data.msg} ${name}!`, "")
                    alert('Amizade aceita')
                })
        }

        else if (friendShipExists === 1 && userIdWhoSentSolicitation == id) {
            await axios.post(`https://imovim-api.cyclic.app/friendShip/remove-friendship`, data)
                .then((res) => {
                    getUserData()
                    showToastSuccess(`${res.data.msg} ${name}!`, "")
                })
        }

        else if (friendShipExists === 0) {
            await axios.post(`https://imovim-api.cyclic.app/friendShip/remove-friendship`, data)
                .then((res) => {
                    getUserData()
                    showToastSuccess(`${res.data.msg} ${name}!`, "")
                })
        }
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

    const handleModalVisible = () => {
        setVisibleModal(!visibleModal)
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
                                        onPress={() => handleFriendship()}
                                    >
                                        {
                                            friendShipExists === 1 && userIdWhoSentSolicitation != id &&
                                            <View style={styles.addFriendsIcons}>
                                                <FontAwesome5 name="user-check" size={24} color="#FFF" />
                                                <Text style={styles.addFriendText}>Aceitar</Text>
                                            </View>
                                        }
                                        {
                                            friendShipExists === 1 && userIdWhoSentSolicitation == id &&
                                            <View style={styles.addFriendsIcons}>
                                                <Entypo name="paper-plane" size={24} color="#FFF" />
                                                <Text style={styles.addFriendText}>Enviado</Text>
                                            </View>
                                        }
                                        {
                                            friendShipExists === null &&
                                            <View style={styles.addFriendsIcons}>
                                                <Ionicons name="md-person-add-sharp" size={24} color="#FFF" />
                                                <Text style={styles.addFriendText}>Adicionar</Text>
                                            </View>
                                        }
                                        {
                                            friendShipExists === 0 &&
                                            <View style={styles.addFriendsIcons}>
                                                <FontAwesome5 name="user-check" size={24} color="#FFF" />
                                                <Text style={styles.addFriendText}>Adicionado</Text>
                                            </View>
                                        }
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.iconsActions}>
                                    <TouchableOpacity>
                                        <Ionicons name="alert-circle" size={35} color="#F8670E" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => setVisibleModal(true)}>
                                        <Entypo name="block" size={29} color="#F8670E" style={{ marginLeft: 8, marginRight: 8 }} />
                                    </TouchableOpacity>

                                    <View>
                                        <Modal
                                            visible={visibleModal}
                                            transparent={true}
                                            onRequestClose={() => setVisibleModal(false)}
                                        >
                                            <BlockUserModal handleClose={handleModalVisible} name={name} />
                                        </Modal>
                                    </View>

                                    <TouchableOpacity onPress={() => handleClick()}>
                                        <Ionicons name="chatbubble" size={30} color="#F8670E" />
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
                    <View style={styles.border} />

                    <View style={{ display: "flex", flexDirection: "row" }}>

                        <ScrollView horizontal={true}>
                            <View style={styles.tags}>
                                <Text style={styles.tagsText}>
                                    #Adicione seus esportes favoritos
                                </Text>
                            </View>
                        </ScrollView>

                        <View>
                            <TouchableOpacity>
                                <Text>teste</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <Toast config={toastConfig} />
                </SafeAreaView>
            }
        />

    );
}