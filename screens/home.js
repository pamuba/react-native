import React , {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  // const pressHandler = () => {
  //   // navigation.navigate('ReviewDetails');
  //   navigation.push('ReviewDetails');
  // }
  const [reviews, setReviews] = useState([
    {title:'Gone With The Wind', rating:5, body:'lorem ipsum', key:'1'},
    {title:'Final Fantasy', rating:3, body:'lorem ipsum', key:'2'},
    {title:'John Wick', rating:4, body:'lorem ipsum', key:'3'},
    {title:'Transporer', rating:5, body:'lorem ipsum', key:'4'},
  ])
  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
      {/* <Button title='Go To Review Details' onPress={pressHandler}/> */}
      <FlatList
        data={reviews}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails', item)}>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </TouchableOpacity>
        )} />
    </View>
  );
}


