import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { AuthContext } from "../../../contexts/auth";
import { getPostNotifications } from "../../../services/notifications";
import { styles } from './style'

import Header from '../../Header/Header'
import Notification from "../../Notifications/NotificationLike/NotificationLike";
import SolicitationNewFriend from "../../Notifications/SolicitationNewFriend/SolicitationNewFriend";

import { getSolicitations } from "../../../services/notifications";
import axios from "axios";
import Toast from 'react-native-toast-message'
import { toastConfig } from '../../Toast/toastConfig';
import { showToastSuccess } from '../../Toast/Toast';

export default function Notificacoes({ navigation }) {
    const { id, setAnotherUser_id } = useContext(AuthContext)
    const [solicitations, setSolicitations] = useState(null)
    const [notifications, setNotifications] = useState(null)
    const [changeComponent, setChangeComponent] = useState(true)
    const [updateScreen, setUpdateScreen] = useState(0)

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


    useEffect(() => {

        getData()
    }, [updateScreen])

    if(!solicitations) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <Header navigation={navigation} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Notificações</Text>
            </View>

            <View style={styles.notificationTypes}>
                
                <TouchableOpacity
                    onPress={() => setChangeComponent(true)}
                    style={[styles.notificationTypesButton, changeComponent ? {backgroundColor: "#D9D9D9"}: {backgroundColor: "#F1F1F1"}]}
                >
                    <Text style={styles.notificationTypesText}>Solicitações</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setChangeComponent(false)}
                    style={[styles.notificationTypesButton, changeComponent ? {backgroundColor: "#F1F1F1"}: {backgroundColor: "#D9D9D9"}]}
                >
                    <Text style={styles.notificationTypesText}>Publicações</Text>
                </TouchableOpacity>
            </View>

            {
                changeComponent === true ?

                    <ScrollView style={styles.notifications}>

                        {solicitations.map((solicitation, index) => {
                            return (
                                <SolicitationNewFriend key={index} 
                                    profileImage={solicitation.profileImage} 
                                    name={solicitation.nickname} 
                                    city={solicitation.localization} 
                                    numberComumSports={solicitation.sportsInCommon} 
                                    friend_id={solicitation.friend1}
                                    navigateToProfile={navigateToProfile}
                                    acceptSolicitation={acceptSolicitation}
                                    resignSolicitation={resignSolicitation}
                                />
                            )
                        })}
                       
                    </ScrollView>

                    :

                    <ScrollView style={styles.notifications}>
                        {notifications.map((notification, index) => {
                            return (
                                <Notification user_id={notification.user_id} navigateToProfile={navigateToProfile} created_at={notification.created_at} profileImage={notification.profileImage} text={notification.text} />
                            )
                        })}

                    </ScrollView>
            }

            <Toast config={toastConfig} />
        </SafeAreaView>
    )
}