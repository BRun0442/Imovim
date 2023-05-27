import React, { useContext, useEffect, useState, useRef } from "react";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./style"

import Header from "../../Header/Header";
import CardEvents from "../../CardEvent/CardEvent";
import { Modalize } from "react-native-modalize";

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
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

    const modalizeEvents = useRef(null);

    const onOpenEvents = () => {
        modalizeEvents.current?.open();
    };

    useEffect(() => {
        getData()
    }, [])

    if (!savedEvents) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View>
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
                                <TouchableOpacity onPress={() => onOpenEvents()}>
                                    <CardEvents
                                        key={index}
                                        width={320}
                                        event_id={event.id}
                                        eventName={event.event_name}
                                        eventImage={event.photo}
                                        describeEvent={event.description}
                                    />
                                </TouchableOpacity>
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
                                <TouchableOpacity onPress={() => onOpenEvents()}>
                                    <CardEvents
                                        key={index}
                                        width={320}
                                        event_id={event.id}
                                        eventName={event.event_name}
                                        eventImage={event.photo}
                                        describeEvent={event.description}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>

            </ScrollView>

            <Modalize ref={modalizeEvents}>
                {eventId != currentEvent ? (
                    <View>
                        <Text>Loading...</Text>
                    </View>
                ) : (
                    <ScrollView style={styles.content}>

                        <View style={styles.header}>
                            <TouchableOpacity style={styles.button}>
                                <FontAwesome5 name="calendar-plus" size={25} color="#F8670E" />
                                <Text style={styles.headerText}>{name}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.contentContainer}>

                            <View style={styles.authorEvent}>
                                <ProfileImage profileImage={profileImage} />
                                <Text style={styles.authorTitle}>Criado por: </Text>
                                <Text style={styles.author}>{author}</Text>
                            </View>

                            <View style={styles.eventImage}>
                                <Image style={styles.image} source={{ uri: image }} />
                            </View>

                            <View style={styles.contentInfo}>

                                <View style={styles.dateEvent}>
                                    <Text style={styles.dateTitle}>Data: </Text>
                                    <Text style={styles.date}>{date}</Text>
                                </View>

                                <View style={styles.hourEvent}>
                                    <Text style={styles.hourTitle}>Horário: </Text>
                                    <Text style={styles.hour}>{hour}</Text>
                                </View>

                                <View style={styles.locationEvent}>
                                    <Text style={styles.locationTitle}>Local: </Text>

                                    <View style={styles.locationDataContainer}>

                                        <View style={styles.locationData}>
                                            <Text style={styles.location}>{location}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.containerButtons}>

                                        <TouchableOpacity
                                            style={styles.buttonMap}
                                            onPress={() => handleMap()}
                                        >
                                            <FontAwesome5 name="map-marked-alt" size={30} color="#F8670E" />
                                            <Text>Ver a localização</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={styles.buttonCopy}
                                            onPress={() => {
                                                copyToClipboard()
                                                showToastBottom('Copiado com sucesso!', 'bottom')
                                            }}
                                        >
                                            <FontAwesome5 name="copy" size={30} color="#F8670E" />
                                            <Text>Copiar a localização</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>

                                <View style={styles.descritpionEvent}>

                                    <Text style={styles.description}>
                                        <Text style={styles.descriptionTitle}>Descrição do Evento: </Text>
                                        {description}
                                    </Text>
                                </View>

                            </View>

                            <View style={styles.interactiveButtonContainer}>

                                <TouchableOpacity onPress={() => {
                                    goToEvent(id, eventId)
                                        .then(() => {
                                            console.log('testeeee');
                                            getEspecificData(eventId)
                                        })
                                }} style={styles.interactiveButton}>

                                    <AntDesign name="like1" size={50} color={userGoes ? "purple" : "#FFF"} />
                                    <Text style={styles.interactiveText}>Eu vou!</Text>

                                    <View style={styles.iGoContainer}>
                                        <Text style={styles.iGo}>{participants}</Text>
                                    </View>

                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    saveEvent(id, eventId)
                                        .then(() => {
                                            console.log('testeeee');
                                            getEspecificData(eventId)
                                        })
                                }} style={styles.interactiveButton}>
                                    {
                                        userSaved ? (
                                            <View style={styles.iconContainer}>
                                                <Feather name="check-circle" size={55} color="#8B04A2" />
                                                <Text style={styles.interactiveText}>Salvo</Text>
                                            </View>
                                        )
                                            :
                                            <View style={styles.iconContainer}>
                                                <Ionicons name="add-circle-outline" size={75} color="#FFF" />
                                                <Text style={styles.interactiveText}>Salvar</Text>
                                            </View>
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                )}
            </Modalize>

        </View>
    )
}