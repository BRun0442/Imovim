import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Header from "../../Header/Header";
import { styles } from "./style"
import { AntDesign } from '@expo/vector-icons';
import CardEvents from "../../CardEvent/CardEvent";
import { getAllEvents } from "../../../services/events";
import { AuthContext } from "../../../contexts/auth";

export default function Eventos({ navigation }) {
    const { id } = useContext(AuthContext)
    const [events, setEvents] = useState(null)
    const getData = async () => {
        const data = await getAllEvents(id)
        return data
    }

    useEffect(() => {
        getData()
            .then((res) => {
                setEvents(res)
                console.log(res)
            })
    }, [])

    if (!events) {
        return (
            <View>
                <Text>loading...</Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Header navigation={navigation} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Eventos</Text>
                </View>

                <View style={styles.eventTag}>
                    <Text style={styles.eventText}>Eventos populares</Text>
                    <AntDesign name="right" size={20} color="black" />
                </View>


                <View style={styles.containerEventsPopular}>
                    <ScrollView horizontal={true}>
                        {events.map((item, id) => {
                            return (
                                <CardEvents
                                    key={id}
                                    event_id={item.id}
                                    eventName={item.event_name}
                                    eventImage={item.photo}
                                    describeEvent={item.description}
                                    event_hour={item.event_hour}
                                    event_date={item.event_date}
                                    location={item.localization}
                                    participants={item.participants}
                                    userGoes={item.userGoesToEvent}
                                    userSaved={item.userSavedEvent}
                                />
                            )
                        })}
                    </ScrollView>
                </View>

                <View style={styles.eventTag}>
                    <Text style={styles.eventText}>Eventos perto de você</Text>
                    <AntDesign name="right" size={20} color="black" />
                </View>

                <View style={styles.containerEventsNearYou}>
                    <ScrollView horizontal={true}>
                        <CardEvents
                            eventName="Evento de PowerLifting"
                            eventImage="https://portalcorreio.com.br/portalcorreio/arquivos/2022/09/dc89df116679d18dc8739c7ce18d8f44.jpg"
                            describeEvent="O evento acontecerá no box da rua 22"
                        />

                        <CardEvents
                            eventName="Corrida no parque"
                            eventImage="https://blog.bodytech.com.br/wp-content/uploads/2022/03/shutterstock_776440840-scaled.jpg"
                            describeEvent="Corrida e Caminhada no parque"
                        />
                    </ScrollView>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}