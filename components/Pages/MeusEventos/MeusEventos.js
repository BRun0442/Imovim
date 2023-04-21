import React, { useContext } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Header from "../../Header/Header";
import { styles } from "./style"
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CardEvents from "../../CardEvent/CardEvent";
import { AuthContext } from "../../../contexts/auth";

export default function MeusEventos({ navigation }) {
    const { myEvents, setMyEvents } = useContext(AuthContext)

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