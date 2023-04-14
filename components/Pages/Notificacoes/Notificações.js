import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../../Header/Header'
import { styles } from './style'
import { AuthContext } from "../../../contexts/auth";

import NotificationNewFriend from '../../Notifications/NotificationNewFriend/NotificationNewFriend'
import NotificationLike from "../../Notifications/NotificationLike/NotificationLike";
import NotificationComent from "../../Notifications/NotificationComent/NotificationComent";
import SolicitationNewFriend from "../../Notifications/SolicitationNewFriend/SolicitationNewFriend";

import { getSolicitations } from "../../../services/notifications";

export default function Notificacoes({ navigation }) {
    const { id, setAnotherUser_id } = useContext(AuthContext)
    const [solicitations, setSolicitations] = useState(null)
    const [changeComponent, setChangeComponent] = useState(true)

    const navigateToProfile = (user_id) => {
        setAnotherUser_id(user_id)
        navigation.navigate('Outros Perfis') 
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getSolicitations(id)
            setSolicitations(data)
        }

        getData()
    }, [])

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
                    style={styles.notificationTypesButton}
                >
                    <Text style={styles.notificationTypesText}>Solicitações</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setChangeComponent(false)}
                    style={styles.notificationTypesButton}
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
                                />
                            )
                        })}
                       
                    </ScrollView>

                    :

                    <ScrollView style={styles.notifications}>

                        <NotificationNewFriend name="Tiago" city="Taboão da Serra" sports="3 esportes em comum" />
                        <NotificationLike name="Tiago" />
                        <NotificationComent name="Tiago" />

                    </ScrollView>
            }

            {/* <ScrollView style={styles.notifications}>

                <NotificationNewFriend name="Tiago" city="Taboão da Serra" sports="3 esportes em comum" />
                <NotificationLike name="Tiago" />
                <SolicitationNewFriend name="Zezão" city="Guarulhos" numberComumSports="2" />
                <NotificationComent name="Tiago" />

            </ScrollView> */}

        </SafeAreaView>
    )
}