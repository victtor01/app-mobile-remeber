import React from "react";
import { 
    Text,
    View
} 
from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'

import style from './style'

export default function AddNote () {
    return (
        <View style={style.container}>
            <Text ><Ionicons name="add" size={27}></Ionicons></Text>
        </View>
    );
}