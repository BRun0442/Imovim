import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Header from "../../Header/Header";
import { styles } from "./style"
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CardEvents from "../../CardEvent/CardEvent";
import { AuthContext } from "../../../contexts/auth";
import { getSavedEvents } from "../../../services/events";

export default function MeusEventos({ navigation }) {
    const { myEvents, setMyEvents, id } = useContext(AuthContext)
    const [savedEvents, setSavedEvents] = useState(null)

    const getData = async () => {
        await getSavedEvents(id)
        .then((events) => {
            setSavedEvents(events)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    if(!savedEvents) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Header navigation={navigation} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Meus Eventos</Text>
                </View>

                <View style={styles.eventTag}>
                    <Text style={styles.eventText}>Eventos criados</Text>
                    <Entypo name="chevron-small-down" size={24} color="#000" />
                </View>


                <View style={styles.containerEventsPopular}>
                    <ScrollView horizontal={true}>
                        {myEvents.map((event, index) => {
                            return (
                                <CardEvents
                                    key={index}
                                    width={320}
                                    event_id={event.id}
                                    eventName={event.event_name}
                                    eventImage={event.photo}
                                    describeEvent={event.description}
                                />
                            )
                        })}
                    </ScrollView>
                </View>

                <View style={styles.eventTag}>
                    <Text style={styles.eventText}>Eventos Salvos</Text>
                    <Entypo name="chevron-small-down" size={24} color="#000" />
                </View>

                <View style={styles.containerEventsNearYou}>
                    <ScrollView horizontal={true}>
                        {savedEvents.map((event, index) => {
                            return (
                                <CardEvents
                                    key={index}
                                    width={320}
                                    event_id={event.id}
                                    eventName={event.event_name}
                                    eventImage={event.photo}
                                    describeEvent={event.description}
                                />
                            )
                        })}
                    </ScrollView>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}