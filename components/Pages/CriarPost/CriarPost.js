import React, { useContext, useState, useEffect } from 'react';
import { View, Image, Text, StatusBar, ScrollView, TouchableOpacity, TextInput, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { styles } from './style'
import Header from '../../Header/Header'

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
  const [captionLength, setCaptionLength] = useState(0)
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

      <Header navigation={navigation} />

      <View style={styles.photoContainer}>
        <FontAwesome5 name="edit" size={24} color="#FFF" />
      </View>

      <View style={styles.postContainer}>

        <View style={styles.postProfile}>
          <ProfileImage profileImage={profilePicture} />
          <Text style={styles.profileName}>{username}</Text>
        </View>

        <View>
          {image ? (
            <Image style={{ width: '100%', height: 300, resizeMode: "stretch" }} source={{ uri: image }} />
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
            maxLength={100}
            onChangeText={(value) => {
              setCaption(value)
              setCaptionLength(value.length)
            }}
          />

          <Text style={styles.captionLengthText}>{captionLength} / 100</Text>

        </View>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')} style={styles.option}>
          <Entypo name="camera" size={26} color={'#FFF'} />
          <Text style={styles.buttonText}>Câmera</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          if (galleryPermission == true) {
            pickImage();
          } else {
            galeryPermisionFunction();
          }
        }} style={styles.option}>
          <MaterialIcons name="add-photo-alternate" size={30} color="#FFF" />
          <Text style={styles.buttonText}>Adicionar foto | Imagem</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.submitButton} onPress={() => {
        CreatePost(image, id, caption, setImage)
        const randomNumber = Math.random()
        setProfileUpdated(randomNumber)
        navigation.navigate('Página Inicial')
      }}>
        <Text style={styles.submitText}>Criar Post</Text>
      </TouchableOpacity>

      <StatusBar barStyle={'light-content'} />

    </ScrollView>
  );
}