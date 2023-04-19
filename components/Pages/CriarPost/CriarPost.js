import React, { useContext, useState, useEffect } from 'react';
import { View, Image, Text, StatusBar, ScrollView, TouchableOpacity, TextInput, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { styles } from './style'
import Header from '../../Header/Header'
import Button from '../../Button/Button';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import ProfileImage from '../../ProfileImage/ProfileImage';
import { AccountDataContext } from "../../../contexts/accountData";
import getUserData from "../../../services/user";
import { AuthContext } from '../../../contexts/auth';
import { useIsFocused } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import CreatePost from "../../../services/createPost.js";

export default function CriarPost({ navigation }) {
  const { profilePicture, username, profileUpdated, setProfileUpdated } = useContext(AuthContext);
  const { setAccountData } = useContext(AccountDataContext);
  const { nickname } = useContext(AuthContext);
  const { id } = useContext(AuthContext);
  const [caption, setCaption] = useState('');
  const { image, setImage } = useContext(AuthContext);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [height, setHeight] = useState()
  const [width, setWidth] = useState();
  // const [type, setType] = useState(CameraType.back);
  // const [cameraPermission, setCameraPermission] = useState(null);
  // const [camera, setCamera] = useState(null);
  // const [imageUrl, setImageUrl] = useState(null);

  //Refresh page when change the route
  const isFocused = useIsFocused();

  useEffect(() => {
    // CameraPermisionFunction();
    // setImage(null);
    setCaption('');
    galeryPermisionFunction();
  }, [isFocused]);

  const galeryPermisionFunction = async () => {
    const galleryPermissions = await MediaLibrary.requestPermissionsAsync();
    setGalleryPermission(galleryPermissions.granted);
  };


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      //   aspect: [1, 1],
      //   quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      getImagesSize()
      // UploadImage(result.uri, setImageUrl)  // PRECISAMOS ARRUMAR ESSA GAMBIARRA!!!
    }
  };

  async function getImagesSize() {
    // Use the width and height props to optimize
    await Image.getSize(image, (width, height) => {
      setHeight(height);
      setWidth(width);
    })

    // setAspectRatio(width/height)
  }

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar />
        <Header navigation={navigation} />

        <View style={styles.photoContainer}>
          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <FontAwesome5 name="edit" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.postContainer}>
          <View style={styles.postProfile}>
            <ProfileImage profileImage={profilePicture} />
            <View style={styles.profileContainer}>
              <Text style={styles.profileName}>{username}</Text>
            </View>
          </View>
          <View>
            {image ? (
              <Image style={{ width: '100%', height: 200, resizeMode: "stretch" }} source={{ uri: image }} />
            ) : (
              <TouchableOpacity onPress={() => {
                if (galleryPermission == true) {
                  pickImage();
                } else {
                  galeryPermisionFunction();
                }
              }} style={styles.emptyPhoto}>
                <FontAwesome name="photo" size={80} color="#F9F9F9" />
                <Text style={styles.emptyPhotoText}>Nenhuma foto...</Text>
              </TouchableOpacity>
            )}
            <TextInput
              style={styles.input}
              value={caption}
              multiline={true}
              textAlign='center'
              placeholder='Fale sobre uma aventura aqui!'
              placeholderTextColor={"#7B7B7B"}
              maxLength={400}
              onChangeText={value => setCaption(value)}
            />
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => navigation.navigate('Camera')} style={styles.button}>
            <Entypo name="camera" size={26} color={'#FFF'} />
            <Text style={styles.buttonText}>Câmera</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            if (galleryPermission == true) {
              pickImage();
            } else {
              galeryPermisionFunction();
            }
          }} style={styles.button}>
            <MaterialIcons name="add-photo-alternate" size={30} color="#FFF" />
            <Text style={styles.buttonText}>Adicionar foto/imagem</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="place" size={28} color={'#FFF'} />
            <Text style={styles.buttonText}>Localização</Text>
          </TouchableOpacity>
        </View>

        <Button buttonText='Criar Post' pressFunction={async () => {
          await CreatePost(image, id, caption, setImage)
          const randomNumber = Math.random()
          setProfileUpdated(randomNumber)
          navigation.navigate('Página Inicial')
        }}
        />
      </ScrollView>
  );
}