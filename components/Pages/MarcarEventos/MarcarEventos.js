import React from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { styles } from './style'
import Header from '../../Header/Header';
import ProfileImage from '../../ProfileImage/ProfileImage';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Entypo } from '@expo/vector-icons';

export default function MarcarEventos(props) {
    return (
        <View style={styles.container}>

            <Header />

            <ScrollView>

                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="calendar" color={"#fff"} size={26} />
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    <View style={styles.postProfile}>
                        <ProfileImage profileImage={props.profileImage} />

                        <View style={styles.profileContainer}>
                            <Text style={styles.profileName}>{props.profileName}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.form}>

                    <Text style={styles.formText}>Nome</Text>
                    <View style={styles.nameInputs}>
                        <TextInput style={styles.inputType1}
                            keyboardType='default'
                        />
                    </View>

                    <Text style={styles.formText}>Data</Text>
                    <View style={styles.dataInputs}>

                        <TextInput style={styles.inputType2}
                            placeholder="Dia"
                            keyboardType='numeric'
                        />

                        <TextInput style={styles.inputType2}
                            placeholder="Mês"
                            keyboardType='numeric'
                        />

                        <TextInput style={styles.inputType2}
                            placeholder="Ano"
                            keyboardType='numeric'
                        />
                    </View>

                    <Text style={styles.formText}>Hora</Text>

                    <View style={styles.horaInputs}>
                        <TextInput style={styles.inputType2}
                            placeholder="hh"
                            keyboardType='numeric'
                        />

                        <TextInput style={styles.inputType2}
                            placeholder="min"
                            keyboardType='numeric'
                        />

                    </View>

                    <Text style={styles.formText}>Local</Text>
                    <View style={styles.nameInputs}>
                        <TextInput style={styles.inputType1}
                            keyboardType='default'
                        />
                    </View>

                    <Text style={styles.formText}>Descrição</Text>
                    <View style={styles.nameInputs}>
                        <TextInput style={styles.inputType3}
                            keyboardType='default'
                        />
                    </View>

                    <Text style={styles.formText}>Foto</Text>

                    <View style={styles.banner}>
                        <TouchableOpacity

                            // onPress={() => main(setBackgroundImage)} 

                            style={styles.editProfileIconContainerBanner}>

                            {/* {!backgroundImage && ( */}

                            <View style={styles.editBanner}>
                                <Entypo name="camera" size={22} color="#FFF" />
                            </View>

                            {/* )} */}

                            {/* {backgroundImage && (
                            <Image
                                style=
                                {
                                    {
                                        width: '95%',
                                        height: 150,
                                    }
                                }
                                source={{ uri: backgroundImage }}
                            />
                        )} */}
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Criar Evento</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <StatusBar />
        </View>
    );
}