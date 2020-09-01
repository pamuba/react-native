import React from 'react';
import { StyleSheet, View, Text , Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function About({navigation}) {

  const pressHandler = () => {
    // navigation.goBack();
    navigation.push('About');
  }

  return (
    <View style={globalStyles.container}>
      <Text>About Screen</Text>
      <Button title='Go To Home Screen' onPress={pressHandler}/>
    </View>
  );
}
