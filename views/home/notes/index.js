import React, { useState, useEffect } from "react";
import { 
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Animated
} 
from "react-native";
import style from './style'

import Header from "../header";
import Categories from "../categories";
import Search from "../search";

import Ionicons from 'react-native-vector-icons/Ionicons'


export default function Notes () {
    const fadeAnim = new Animated.Value(0)

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true
        }).start();
    }, []);

    const [note, setNote] = useState(
        [
            {
                id: 1,
                name: 'TCC',
                text: 'Terminar o TCC para hoje!',
                color: 'rgba(100,255,120,1)'
            },
            {
                id: 2,
                name: 'Lanchar',
                text: 'lanchar',
                color: 'rgba(100,255,120,1)'
            },
            {
                id: 3,
                name: 'Correr',
                text: '',
                color: 'rgba(3,200,255,1)'
            },
            {
                id: 4,
                name: 'Tarefas',
                text: 'Taferas',
                color: 'rgba(255,150,0,1)'
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
    const [noteId, setNoteId] = useState(1)

    const Note = (data) => (
        
        <TouchableOpacity style={[style.box,{opacity: fadeAnim}]} activeOpacity={0.9}>
            <Text style={{fontSize: 20, fontWeight: '500', color: '#2c4d56'}}>{data.name}</Text>
            <Ionicons name="bookmark" 
            style={{
                height: '100%',
                width: 50,
                right: 0,
                textAlign: 'right',
                color: data.color ? data.color : '#fff',
                position: 'absolute',
                padding: 0
            }} size={30}></Ionicons>
        </TouchableOpacity>
    );

    const All = () => {
        return (
            <View style={{}}>
                <Categories get={noteId} set={setNoteId}/>
                <Search/>
            </View>
        );
    }

    return (
        <View style={style.container}>
            <FlatList 
            ListHeaderComponent={All}
            data={note} 
            renderItem={({item}) => <Note color={item.color} name={item.name}/>}
            keyExtractor={item => item.id}
            style={style.content}
            />
        </View>
    );
}