import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../../Header/Header'
import { styles } from './style'

import NotificationNewFriend from '../../Notifications/NotificationNewFriend/NotificationNewFriend'
import NotificationLike from "../../Notifications/NotificationLike/NotificationLike";
import NotificationComent from "../../Notifications/NotificationComent/NotificationComent";
import SolicitationNewFriend from "../../Notifications/SolicitationNewFriend/SolicitationNewFriend";

export default function Notificacoes({ navigation }) {

    const [changeComponent, setChangeComponent] = useState(false)

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

                        <SolicitationNewFriend name="Zezão" city="Guarulhos" numberComumSports="2" />
                        <SolicitationNewFriend name="Zezão" city="Guarulhos" numberComumSports="2" />
                        <SolicitationNewFriend name="Zezão" city="Guarulhos" numberComumSports="2" />

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