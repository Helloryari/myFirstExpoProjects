import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import Constants from 'expo-constants';
import { Alert, Button, FlatList, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import TodoItem from './components/TodoItem';
import Row from './components/Row';
import Padding from './components/Padding';

export default function App() {
  const [ list, setList ] = useState( [ 
    { key: '1', content: '할 일 1' },
    { key: '2', content: '할 일 2' },
  ] );
  const [ inputText, setInputText ] = useState( '' );
  const addItem = useCallback( () => {
    setList( [ ...list, { key: new Date().toString(), content: inputText } ] );
    setInputText( '' );
  }, [ list, inputText ] );
  return (
    <SafeAreaView style={ styles.container }>
      <Padding padding={ 12 } style={{ flex: 1 }}>
        {/* 출력 */}
        <FlatList
          data={ list }
          renderItem={ item => <TodoItem label={ item.item.content } /> }
          style={{ flex: 1 }}
        />
        {/* 입력 */}
        <Row>
          <TextInput 
            style={ styles.input }
            value={ inputText }
            onChangeText={ text => setInputText( text ) }
          />
          <Button title='전송' onPress={ addItem }/>
        </Row>
      </Padding>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop : Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    flex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 1,
  }
});
