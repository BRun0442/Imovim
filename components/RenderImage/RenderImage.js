import React, { Component } from 'react';

import { View, FlatList, Image } from 'react-native';

import PlaceholderImage from './PlaceholderImage';

export default class RenderImage extends Component {
  state = {
    data: [
      { id: this.props.id, url: this.props.url, loaded: false },
    ],
  }

  handleLazyLoad = ({ viewableItems }) => {
    const newData = this.state.data.map(image =>
      viewableItems.find(({ item }) => item.id === image.id)
        ? { ...image, loaded: true }
        : image
    );

    this.setState({ data: newData });
  }

  renderItem = ({ item }) => (
    <View>
      { item.loaded && <Image
        source={ item.url }
        style={this.props.style}
      /> }
      { !item.loaded && (
        <PlaceholderImage style={this.props.style} url={item.url} />
      )}
    </View>
  );

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        onViewableItemsChanged={this.handleLazyLoad}
      />
    );
  }
}