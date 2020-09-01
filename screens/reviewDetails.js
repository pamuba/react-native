import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {
  
  // const pressHandler = () => {
  //   // navigation.goBack();
  //   navigation.replace('About');
  // }
  
  return (
    <View style={globalStyles.container}>
      {/* <Text>ReviewDetails Screen</Text> */}
      {/* <Button title='Go To About Screen' onPress={pressHandler}/> */}
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('body')}</Text>
      <Text>{navigation.getParam('rating')}</Text>
    </View>
  );
}
