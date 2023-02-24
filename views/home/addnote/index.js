import React,{useState}from "react";
import { 
    Text,
    TouchableOpacity,
    View
} 
from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'

import style from './style'

import { useNavigation } from '@react-navigation/native';

export default function ButtonAddNote ({modal}) {

    let navigation = useNavigation();

    return (
        <TouchableOpacity onPress={(event) => {
            event.persist()
            modal.current?.open() 
        }} 
            activeOpacity={0.9} style={style.container}
            >
            <Text style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}} ><Ionicons color='#fff' name="add" size={27}></Ionicons></Text>
        </TouchableOpacity>
    );
}