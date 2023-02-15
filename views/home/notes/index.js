import React, { useState } from "react";
import { 
    Text,
    View,
    FlatList,
    TouchableOpacity
} 
from "react-native";
import style from './style'

import Header from "../header";
import Cateogories from "../categories";
import Search from "../search";


export default function Notes () {
    const [note, setNote] = useState(
        [
            {
                id: 1,
                name: 'TCC',
                text: 'Terminar o TCC para hoje!'
            },
            {
                id: 2,
                name: 'Lanchar',
                text: 'lanchar'
            },
            {
                id: 3,
                name: 'Correr',
                text: ''
            },
            {
                id: 4,
                name: 'Tarefas',
                text: 'Taferas'
            },
            {
                id: 5,
                name: 'Atividades',
                text: 'Terminar o TCC para hoje!'
            },
            {
                id: 6,
                name: 'Arrumar a casa',
                text: 'Terminar o TCC para hoje!'
            },
            {
                id: 7,
                name: 'Academia',
                text: 'Terminar o TCC para hoje!'
            },
            {
                id: 8,
                name: 'Estudar matemática',
                text: 'Terminar o TCC para hoje!'
            },
            {
                id: 9,
                name: 'Estudar Programação',
                text: 'Terminar o TCC para hoje!'
            },
        ]
    )

    const Note = (data) => (
        
        <TouchableOpacity style={style.box} activeOpacity={0.9}>
            <Text style={{fontSize: 20, fontWeight: '500', color: '#2c4d56'}}>{data.name}</Text>
        </TouchableOpacity>
    );

    const All = () => {
        return (
            <View>
                <Header/>
                <Cateogories/>
                <Search/>
            </View>
        );
    }

    return (
        <View style={style.container}>
            <FlatList 
            ListHeaderComponent={All}
            data={note} 
            renderItem={({item}) => <Note name={item.name}/>}
            keyExtractor={item => item.id}
            style={style.content}
            />
        </View>
    );
}