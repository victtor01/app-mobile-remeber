import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Navigate from './views';

export default function App() {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);

  const Login = async (email) => {
    console.log(email)
    setLogged(true);
    return 'jose@gmail.com' == email ? true : false
  }

  useEffect(() => {
      AsyncStorage.getItem('user').then((prop) => {
      console.log(prop)
      return prop

    }).then(prop => {
      console.log('deu certo')
      let verify = Login(prop)
    })

  }, [])

  if(!logged)
  {
    return(
      <Text style={{margin: 100}}>Faça Login</Text>
    );
  }

  return (
    <Navigate/>
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
