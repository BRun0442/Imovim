import React from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './style'
import Header from '../../Header/Header';
import ProfileImage from '../../ProfileImage/ProfileImage';
import Line from '../../Line/Line'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function MarcarEventos(props) {
    return (
        <View style={styles.container}>
            <StatusBar/>
            <Header />

            <View style={styles.photoContainer}>
                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons name="calendar" color={"#fff"} size={26} />
                </TouchableOpacity>
            </View>

            <Line />

            <View style={styles.postContainer}>
                <View style={styles.postProfile}>
                    <ProfileImage profileImage={props.profileImage} />

                    <View style={styles.profileContainer}>
                        <Text style={styles.profileName}>{props.profileName}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.form}>

                <Text>Nome do evento</Text>
                <View style={styles.nameInputs}>
                    <TextInput style={styles.inputType1} />
                </View>

                <Text>Data</Text>

                <View style={styles.dataInputs}>

                    <TextInput style={styles.inputType2}
                        placeholder="Dia" />

                    <TextInput style={styles.inputType2}
                        placeholder="Mês" />

                    <TextInput style={styles.inputType2}
                        placeholder="Ano" />
                </View>

                <Text>Hora</Text>

                <View style={styles.horaInputs}>
                    <TextInput style={styles.inputType2}
                        placeholder="hh" />

                    <TextInput style={styles.inputType2}
                        placeholder="min" />

                    <TextInput style={styles.inputTypeFalse} />
                </View>

                <Text>Local do evento</Text>
                <View style={styles.nameInputs}>
                    <TextInput style={styles.inputType1} />
                </View>

                <Text>Descrição do Evento</Text>
                <View style={styles.nameInputs}>
                    <TextInput style={styles.inputType3} />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Criar Evento</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}