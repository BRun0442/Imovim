/* Core */
import React, { Component } from "react";
// import loadingImage from "../../assets/loading.gif"
/* Presentational */
import { View, Image, Animated, ActivityIndicator, StyleSheet } from "react-native";

export default class PlaceholderImage extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = event => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 800,
    }).start();
  }

  render() {
    return (


      <View
        style={styles.loadContainer}
      >
        <ActivityIndicator size={50} color={"#FF6709"} />
        {/* <Image
          {...this.props}
          style={{ width: "100%", height: 300 }}
          source={loadingImage}
        />
        <Animated.Image
          {...this.props}
          source={this.props.url}
          style={[...this.props.style,
          { position: "absolute", opacity: this.state.opacity, width: "100%", height: 300, }
          ]}
          onLoad={this.onLoad}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadContainer: {
    width: "100%",
    height: 300,
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#D9D9D9",
  }
})