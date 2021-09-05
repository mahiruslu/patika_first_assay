/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Input from './src/Componenets/input/index'
import ProductCard from './src/Componenets/productCard/index'

import products_data from './products.json'

const App = () => {
  const numColumns = 2;
  console.log(products_data)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topText}>PATİKASTORE</Text>
      <Input />
      <FlatList data={products_data} renderItem={({item}) => <ProductCard item={item}/>} numColumns={numColumns}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  topText:{
    margin: 8,
    marginBottom:0,
    fontSize: 18,
    fontWeight: '700',
    color:"purple",
  }
});

export default App;
