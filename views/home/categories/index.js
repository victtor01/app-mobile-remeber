import React, {useState} from "react";
import { 
    Text,
    View,
    TouchableOpacity,
    FlatList
} 
from "react-native";
import style from './style'

export default function Cateogories () {

    const [categorias, setCategorias] = useState(
        [
            {
                id: 1,
                name: 'Principais'
            },
            {
                id: 2,
                name: 'Aleatorios'
            },
            {
                id: 3,
                name: 'Para hoje'
            }
        ]
    )

    const Category = (data) => (
        
        <TouchableOpacity style={style.box} activeOpacity={0.7}>
            <Text style={style.nameBox}>{data.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={style.container}>
            <FlatList 
            nestedScrollEnabled
            data={categorias} 
            renderItem={({item}) => <Category name={item.name}/>}
            keyExtractor={item => item.id}
            horizontal={true}
            style={style.content}
            showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}