import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles'
import { defaultStyle } from '../../assets/style/style';
import ProfileImage from '../ProfileImage/ProfileImage';

function Post(props)
{
  return(
    <View style={styles.postContainer}>
      <View style={styles.postProfile}>
        <ProfileImage profileImage={props.profileImage}/>

        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>{props.profileName}</Text>
          <Text style={styles.postDate}>{props.postDate}</Text>
        </View>
      </View>

      <Image style={styles.postImage} source={{uri: props.postImage}}/>

      <Text style={styles.postDescription}>{props.postDescription}</Text>

      {/* <View styles={styles.postInteraction}>
        <TouchableOpacity>
          <Image style={styles.postInteractionImage} source={{uri: "https://img.icons8.com/material-rounded/24/FFFFFF/facebook-like--v1.png"}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.postInteractionImage} source={{uri: "https://img.icons8.com/ios-glyphs/30/FFFFFF/speech-bubble--v1.png"}}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.postInteractionImage} source={{uri: "https://img.icons8.com/android/24/FFFFFF/share.png"}}/>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

export default Post;