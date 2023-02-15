import React from "react";
import { 
    Text,
    View,
    Image
} 
from "react-native";

import style from './style'

import Header from './header';
import Cateogories from "./categories";
import Notes from "./notes";
import AddNote from "./addnote";
import Search from "./search";

export default function Home () {
    return (
        <View style={style.container}>
            <Image resizeMode="cover" style={{position: 'absolute', height: '100%'}} source={require('../../assets/images/montanha.png')}/>
            <Notes/>
            <AddNote/>
        </View>
    );
}