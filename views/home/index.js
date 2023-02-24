import React, { useEffect, useState, useRef } from "react";
import { 
    View,
    KeyboardAvoidingView,
    Platform,
    Image
} 
from "react-native";
import style from './style'
import Notes from "./notes";

import { StatusBar } from "expo-status-bar";
import AddNote from "../note";
import ButtonAddNote from "./addnote";

export default function Home () {

    const modalizeRef = useRef(null)

    return (
        
        <View style={style.container}>
            <StatusBar backgroundColor="#2c4d56" style="light"/>
            <Image blurRadius={5} 
            resizeMode="cover" 
            pointerEvents="none" 
            style={style.background} 
            source={require('../../assets/images/gelo.png')}
            /> 
            <View style={{height: '120%', 
            width: '100%', 
            position: 'absolute', 
            backgroundColor: 'rgba(0,0,0,0.5)'}}
            />       
            <Notes/>
            <ButtonAddNote modal={modalizeRef}/>
            <AddNote modal={modalizeRef}/>
        </View>
    );
}