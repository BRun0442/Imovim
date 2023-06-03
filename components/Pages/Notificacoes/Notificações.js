import React, { useState, useEffect, useContext } from "react";
import { FlatList, View, Text, TouchableOpacity, RefreshControl } from 'react-native'
import { styles } from './style'

import { AuthContext } from "../../../contexts/auth";
import { getPostNotifications } from "../../../services/notifications";
import Toast from 'react-native-toast-message'

import Header from '../../Header/Header'
import Notification from "../../Notifications/NotificationLike/NotificationLike";
import SolicitationNewFriend from "../../Notifications/SolicitationNewFriend/SolicitationNewFriend";
import Loading from "../../Loading/Loading";

import { getSolicitations } from "../../../services/notifications";
import axios from "axios";
import { toastConfig } from '../../Toast/toastConfig';
import { showToastSuccess } from '../../Toast/Toast';

export default function Notificacoes({ navigation }) {
    const { id, setAnotherUser_id } = useContext(AuthContext)
    const [solicitations, setSolicitations] = useState(null)
    const [notifications, setNotifications] = useState(null)
    const [changeComponent, setChangeComponent] = useState(false)
    const [updateScreen, setUpdateScreen] = useState(0)
    const [refreshing, setRefreshing] = useState(false);

    const navigateToProfile = (user_id) => {
        setAnotherUser_id(user_id)
        navigation.navigate('Outros Perfis')
    }

    const getData = async () => {
        const solicitationsData = await getSolicitations(id)
        setSolicitations(solicitationsData)
        const notificationsData = await getPostNotifications(id)
        setNotifications(notificationsData)
    }

    const resignSolicitation = async (user_id, friend_id) => {
        const data = { user_id: user_id, friend_id: friend_id }
        await axios.post(`https://imovim-api.cyclic.app/friendShip/remove-friendship`, data)
            .then(async (res) => {
                // setUpdateScreen(Date.now())
                await getData()
                showToastSuccess(`${res.data.msg}!`, "")
            })
    }

    const acceptSolicitation = async (user_id, friend_id) => {
        const data = { user_id: user_id, friend_id: friend_id }
        await axios.post(`https://imovim-api.cyclic.app/friendShip/accept-solicitation`, data)
            .then(async (res) => {
                await getData()
                // setUpdateScreen(Date.now())
                showToastSuccess(`${res.data.msg}!`, "")
                alert('Amizade aceita')
            })
    }

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(async () => {
            await getData();
            setRefreshing(false);
        }, 1)
    }

    useEffect(() => {

        getData()
    }, [updateScreen])

    if (!solicitations) {
        return (
            <Loading
                height={"100%"}
            />
        )
    }

    return (
        <View style={styles.container}>

            <Header navigation={navigation} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Notificações</Text>
            </View>

            <View style={styles.notificationTypes}>

                <TouchableOpacity
                    onPress={() => setChangeComponent(false)}
                    style={[styles.notificationTypesButton, changeComponent ? { backgroundColor: "#F1F1F1" } : { backgroundColor: "#D9D9D9" }]}
                >
                    <Text style={styles.notificationTypesText}>Publicações</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setChangeComponent(true)}
                    style={[styles.notificationTypesButton, changeComponent ? { backgroundColor: "#D9D9D9" } : { backgroundColor: "#F1F1F1" }]}
                >
                    <Text style={styles.notificationTypesText}>Solicitações</Text>
                </TouchableOpacity>
            </View>

            {
                changeComponent === true ?

                    <FlatList style={styles.notifications}
                        data={solicitations}
                        ListEmptyComponent={
                            <View style={{ width: "100%", height: 400, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 16 }}>Nenhuma solicitação</Text>
                            </View>
                        }
                        keyExtractor={item => item.id}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                        }
                        maxToRenderPerBatch={5}
                        initialNumToRender={5}
                        onRefresh={() => getFeed()}
                        refreshing={refreshing}
                        renderItem={({ item }) =>
                            <SolicitationNewFriend
                                profileImage={item.profileImage}
                                name={item.nickname}
                                city={item.localization}
                                numberComumSports={item.sportsInCommon}
                                friend_id={item.friend1}
                                navigateToProfile={navigateToProfile}
                                acceptSolicitation={acceptSolicitation}
                                resignSolicitation={resignSolicitation}
                                navigation={navigation}
                            />
                        }
                    />

                    :

                    <FlatList style={styles.notifications}
                        data={notifications}
                        ListEmptyComponent={<View><Text>Nenhuma notificação</Text></View>}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                        }
                        maxToRenderPerBatch={5}
                        initialNumToRender={5}
                        onRefresh={() => getFeed()}
                        refreshing={refreshing}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <Notification
                                postId={item.postId}
                                user_id={item.user_id}
                                navigateToProfile={navigateToProfile}
                                created_at={item.created_at}
                                profileImage={item.profileImage}
                                nickname={item.nickname}
                                text={item.text}
                                navigation={navigation}
                            />
                        }
                    />
            }

        </View>
    )
}