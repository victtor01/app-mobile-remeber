import React from "react";
import { 
    Text,
    View
} 
from "react-native";
import style from './style'

export default function Header () {
    return (
        <View style={[style.container]}>
            <Text style={style.title}>Lembreme</Text>
        </View>
    );
}