import React from "react";
import { createStackNavigator} from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";
const Stack = createStackNavigator();

import Home from "../home";
import AddNote from "../note";

export default function MyStack() 
{
    return(
        <Stack.Navigator initialRouteName='Home' 
        screenOptions={{
        gestureEnabled: true,
        gestureDirection: "vertical",
        cardStyle: { 
            backgroundColor: '#fff',
        },
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}>
        <Stack.Screen 
            options={{headerShown: false}} 
            component={Home} 
            name='Home'
        />
        <Stack.Screen 
            options={{
            headerShown: false, 
            cardStyle:{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20, 
                elevation: 4, 
                shadowOffset: {height: -100}, 
                shadowRadius: 200,
                shadowColor: '#000'
            }
            }} 
            component={AddNote} 
            name='AddNote'
        />        
        </Stack.Navigator>  
    );
}