import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Cadastro />
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
