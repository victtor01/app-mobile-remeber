import React, { useEffect, useState } from "react";
import { 
    View,
    ImageBackground,
    KeyboardAvoidingView,
    Platform
} 
from "react-native";
import style from './style'
import Notes from "./notes";
import AddNote from "./addnote";

export default function Home () {

    const [modal, setModal] = useState(false)

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={style.container} contentContainerStyle={{ paddingBottom: 2000 }}>
            <ImageBackground resizeMode="cover" style={style.background} source={require('../../assets/images/montanha.png')}>
                <Notes/>
                <AddNote set={setModal} />
            </ImageBackground>
      </KeyboardAvoidingView>
    );
}