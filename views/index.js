import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from './home';

export default function Navigate() {
  return (
    <NavigationContainer>
        <StatusBar style='auto'/>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen options={{headerShown: false}} component={Home} name='Home'/>
        </Stack.Navigator>  
    </NavigationContainer>  
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
