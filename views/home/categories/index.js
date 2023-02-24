import React, {useState} from "react";
import { 
    Text,
    View,
    TouchableOpacity,
    FlatList
} 
from "react-native";
import style from './style'

export default function Categories (note) {

    const [categorias, setCategorias] = useState(
        [
            { id: 1, name: 'Para Hoje' }, 
            { id: 2,name: 'Essa semana' },
            { id: 3,name: 'Sem data' }
        ]
    )
    
    const Category = (data) => {
        
        let verification = data.id === data.idNote;

        return (
            <TouchableOpacity onPress={() => {note.set(data.id)}} style={[style.box, {backgroundColor: verification ? '#2c4d56': '#fff'}]} activeOpacity={0.7}>
                <Text style={[style.nameBox, {color: verification ? '#fff': '#000'}]}>{data.name}</Text>
            </TouchableOpacity> 
        );
    };

    //[data.idNote == data.id &&({ backgroundColor: '#2c4d56'})]

    return (
        <View style={style.container}>
            <FlatList 
            nestedScrollEnabled
            data={categorias} 
            renderItem={({item}) => <Category name={item.name} id={item.id} idNote={note.get}/>}
            keyExtractor={item => item.id}
            horizontal={true}
            style={style.content}
            showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}