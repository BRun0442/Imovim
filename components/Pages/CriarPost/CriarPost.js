import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../Header/Header'
import Line from '../../Line/Line';
import Button from '../../Button/Button';
import Post from '../../Post/Post';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ProfileImage from '../../ProfileImage/ProfileImage';


export default function CriarPost(props) {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.photoContainer}>
                <TouchableOpacity styles={styles.button}>
                    <MaterialCommunityIcons name="camera" color={"#fff"} size={26} />
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

                <View style={{ maxHeight: 200, maxWidth: 350 }}>
                    <Image style={styles.postImage} source={{ uri: props.postImage }} />
                    <Text style={styles.coment}>{props.coment}</Text>
                </View>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}>
                    <Entypo name="camera" size={26} color={'#fff'} />
                    <Text style={styles.buttonText}>Câmera</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons name="camera-plus" size={26} color={'#fff'} />
                    <Text style={styles.buttonText}>Adicionar foto/imagem</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <MaterialIcons name="place" size={26} color={'#fff'} />
                    <Text style={styles.buttonText}>Localização</Text>
                </TouchableOpacity>

            </View>
            <Button buttonText='Criar Post' />
        </View>
    );
}