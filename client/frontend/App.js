import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '100vh',
  },
});
