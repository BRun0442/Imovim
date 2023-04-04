import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import Header from '../../Header/Header';

export default function Map({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '95%',
  },
});