import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

//components
import MyDrawer from './drawer';

export default function Navigate() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2c4d56" style="light"/>
      <NavigationContainer>
          <MyDrawer/>
      </NavigationContainer>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});