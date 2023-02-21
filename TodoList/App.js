import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { Alert, Button, FlatList, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import TodoItem from './components/TodoItem';
import Row from './components/Row';
import Padding from './components/Padding';
import AsyncStorage from '@react-native-async-storage/async-storage';

function updateStorage( data ) {
  AsyncStorage.setItem( 'todo-list', JSON.stringify( data ) );
}

export default function App() {
  const [ list, setList ] = useState( [] );
  const [ inputText, setInputText ] = useState( '' );

  const addItem = useCallback( () => {
    const newData = [ ...list, { key: new Date().toString(), content: inputText } ];
    setList( newData );
    updateStorage( newData );
    setInputText( '' );
  }, [ list, inputText ] );

  const removeItem = useCallback( ( key ) => {
    const newData = list.filter( item => item.key !== key );
    setList( newData );
    updateStorage( newData );
  }, [ list ]);

  useEffect(()=>{
    AsyncStorage.getItem( 'todo-list' ).then( rawData => {
      if( rawData ) {
        setList( JSON.parse( rawData ) );
      } else {
        setList( [] );
      }
    } )
  },[])

  return (
    <SafeAreaView style={ styles.container }>
      <Padding padding={ 12 } style={{ flex: 1 }}>
        {/* 출력 */}
        <FlatList
          data={ list }
          renderItem={ item => (
            <TodoItem
              label={ item.item.content }
              onDelete={ () => removeItem( item.item.key ) }
            />
          ) }
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
