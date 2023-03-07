import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library'
import { useState, useEffect, useContext } from 'react';
import { Button, StyleSheet, Text, Image, View, Alert } from 'react-native';
import { AuthContext } from '../../../contexts/auth';

export default function CameraScreen({ navigation }) {
    const { image, setImage } = useContext(AuthContext)
  const [type, setType] = useState(CameraType.back);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);

  // gets permision for camera
  const CameraPermisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestPermissionsAsync();

    setCameraPermission(cameraPermission.status === 'granted');
  };

  // gets permision for gallery
  const GaleryPermisionFunction = async () => { 
    const galleryPermissions = await MediaLibrary.requestPermissionsAsync();
    setGalleryPermission(galleryPermissions.status === 'granted')
    console.log(galleryPermissions.status)
    if(galleryStatus !== 'granted'){
      alert('Sorry, you are not allowed to do it')
    }
  }

  useEffect(() => {
    CameraPermisionFunction();

    GaleryPermisionFunction()
  }, []);

  // takes pickture
  const takePicture = async () => { 
    if(camera) {
      const data = await camera.takePictureAsync()
      .then((data) => {
        console.log(data.uri)
        setImage(data.uri)
      }). catch((error) => console.log(error))
    }
  }

  // picks image from gallery
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if(!cameraPermission || !galleryPermission){
    return <Text>{galleryPermission ? "ok" : "no"}</Text>
  }

  // flips the camera
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <View style={styles.CamaraContainer}>
        <Camera 
          style={styles.fixedRatio} 
          type={type} 
          ratio={'1:1'} 
          ref={ref => setCamera(ref)}
          />
      </View>
      <Button title='Flip Camara' style={styles.button} onPress={toggleCameraType} />
      <Button title='Pick Image From Galery' onPress={() => pickImage()} />
      <Button title='Take Picture' onPress={() => takePicture()} />
      <Button title='Save' onPress={() => {
        navigation.navigate("CriarPost")
        }} />
      {image && <Image source={{uri: image}} style={{flex: 1}} />}
    </View>
  );
}

const styles = StyleSheet.create({ 
  CamaraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  }
 }); 