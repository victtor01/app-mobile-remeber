import { Text, View, TextInput, TouchableOpacity} from "react-native";
import React from "react";
import style from "./style";
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Search()
{
    return (
        <View style={style.container}>
            <TextInput placeholder="Pesquise aqui..." style={style.search}/>
            <TouchableOpacity style={style.buttonSearch}>
                <Ionicons name="search"></Ionicons>
            </TouchableOpacity>
        </View>
    );
}