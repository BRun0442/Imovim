import React, { useContext, useState } from 'react';
import { View, Text, Image, StatusBar, ScrollView } from 'react-native';
import { styles } from './style'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../Header/Header'
import Button from '../../Button/Button';
import Post from '../../Post/Post';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ProfileImage from '../../ProfileImage/ProfileImage';
import { AuthContext } from '../../../contexts/auth';
import Input from '../../Input/Input';
import { createPost } from '../../../services/post.js';

function CriarPost({navigation}) {
    const { profilePicture } = useContext(AuthContext);
    const { nickname } = useContext(AuthContext);
    const { id } = useContext(AuthContext);
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState('https://img.ifunny.co/images/5b1f7483b65b3e41fc84cc5354e9a142bb8d9cae8a23de6d098f2d2c59d06c37_3.jpg');

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar/>
                <Header />
                <View style={styles.photoContainer}>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <MaterialCommunityIcons name="camera" color={"#fff"} size={26} />
                    </TouchableOpacity>
                </View>
                <View style={styles.postContainer}>
                    <View style={styles.postProfile}>
                        <ProfileImage profileImage={profilePicture} />
                        <View style={styles.profileContainer}>
                            <Text style={styles.profileName}>{nickname}</Text>
                        </View>
                    </View>
                    <View>
                        <Image style={styles.postImage} source={{ uri: 'https://img.ifunny.co/images/5b1f7483b65b3e41fc84cc5354e9a142bb8d9cae8a23de6d098f2d2c59d06c37_3.jpg'}} />
                        <TextInput 
                            style={styles.input} 
                            multiline 
                            textAlign='center' 
                            placeholder='Fale sobre uma aventura aqui!' 
                            placeholderTextColor={"#7B7B7B"}
                            maxLength={400}
                            onChangeText={(value) => {setCaption(value)}}
                        />
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
                <Button buttonText='Criar Post' pressFunction={() => {
                    createPost(id, caption, image)
                    navigation.navigate('Feed')
                    }}
                />
            </View>
        </ScrollView>
    );
}

export default CriarPost;