import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log( 'render app!!' );
  console.log( 'TYPE: info' );
  console.log( 'obj', { id: 1 } );
  return (
    <View style={styles.container}>
      <Text>Why don't you modify it!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
