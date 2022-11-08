import React from 'react';
import {View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from '../Feed/Feed';
import ComentariosScreen from '../Comentarios/Comentarios'

const Stack = createStackNavigator() // gerencia a navegação entre as telas

export default () => {
  return (
        <Stack.Navigator initialRouteName='Feed'>
          <Stack.Screen name='Feed' component={FeedScreen} options={{headerShown: false}} />
          <Stack.Screen name='Comments' component={ComentariosScreen} options={{headerShown: false}} />
        </Stack.Navigator>
  );
};
