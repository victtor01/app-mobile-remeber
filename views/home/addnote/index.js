import React from "react";
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

export default function AddNote (modal) {

    let navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('AddNote')} activeOpacity={0.9} style={style.container}>
            <Text ><Ionicons name="add" size={27}></Ionicons></Text>
        </TouchableOpacity>
    );
}