import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import MapView from "react-native-maps";

import * as Location from "expo-location";

import Header from "../../Header/Header";

export default function Map() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } =
        await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  console.log(location);

  return (
    <View style={styles.container}>
      <Header />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.42597730214824,
          longitude: -122.0856026405,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        loadingEnabled
        mapType="mutedStandard"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '95%',
  },
});