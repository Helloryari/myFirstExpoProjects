/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RootContainer from './src/navigations/RootContainer';
import BoxOffice from './src/screens/BoxOffice';
import MovieDetail from './src/screens/MovieDetail';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={ styles.container }>
      <RootContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
