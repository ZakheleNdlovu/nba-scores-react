import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ControlAll from "./components/Control";


export default function App() {
  return (
    <View style={styles.container}>
      <ControlAll />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    height: '100%',
    width: '100%'

  },
});
