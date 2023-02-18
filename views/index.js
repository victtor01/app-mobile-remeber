import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators} from "@react-navigation/stack";
import { SafeAreaView } from 'react-native-safe-area-context';
const Stack = createStackNavigator();

import Home from './home';
import AddNote from './note';
export default function Navigate() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
          <StatusBar style='auto'/>
          <Stack.Navigator initialRouteName='Home' 
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: "vertical",
              cardStyle: { backgroundColor: '#fff',},
              cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
              }}>
              <Stack.Screen options={{headerShown: false}} component={Home} name='Home'/>
              <Stack.Screen options={{headerShown: false, cardStyle:{borderTopLeftRadius: 20,borderTopRightRadius: 20, backgroundColor: '#fff'}}} component={AddNote} name='AddNote'/>          
          </Stack.Navigator>  
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
