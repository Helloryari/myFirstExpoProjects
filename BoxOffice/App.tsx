/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BoxOffice from './src/screens/BoxOffice';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={ styles.container }>
      <BoxOffice />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
