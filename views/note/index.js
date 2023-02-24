import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text,Image, ScrollView, TextInput, TouchableOpacity, ImageBackground} from "react-native";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Modalize } from 'react-native-modalize';
import style from "./style";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function AddNote({modal})
{

    const [selectedValue, setSelectedValue] = useState('blue');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setSelectedDate(currentDate);
    };

    const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === 'ios');
    setSelectedTime(currentTime);
    };

    return (
            <Modalize
                ref={modal}
                modalHeight={700}
                blurRadius={20}
                modalStyle={{backgroundColor: '#fff'}}
            >

                {/* <Image resizeMode="cover" pointerEvents="none" style={style.background} source={require('../../assets/images/gelo.png')}/>     
                <View style={{height: '120%', width: '100%', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.6)'}}/> */}   
                {/* <View style={style.header}>
                    <View style={style.spanHeader} />
                </View> */}

                <View style={style.content}>
                    <Image  style={{position: 'absolute', height: '100%',width: '100%' }} />
                    <View style={style.headerContent}>
                        <Text style={style.headerTitle}>
                            Nova anotação
                        </Text>
                    </View>
                    <View style={style.form}>
                        <View style={style.label}>
                            <Text style={style.name}> Nome da anotação: </Text>                   
                            <TextInput place placeholderTextColor={'rgba(180,180,180,0.8)'} placeholder="Exp: Estudar Matemática" style={style.input}/>
                        </View>
                        <View style={style.label}>
                            <Text style={style.name}> Texto: </Text>                           
                            <TextInput multiline={true}  placeholderTextColor={'rgba(180,180,180,0.8)'} placeholder="Exp: Conteúdos: Equações de segundo grau"  numberOfLines={100} textAlignVertical="top" style={[style.input, {height: 200}]} autoGrow={true}/>
                        </View>
                        <View style={style.label}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{width: '50%', paddingLeft: 5, paddingRight: 5}}>
                                    <Text style={style.name}> Data: </Text>
                                    <TouchableOpacity style={[style.input, {justifyContent: 'center', textAlign: 'center', width: '100%'}]} onPress={() => {setShowDatePicker(true)}}>
                                        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '500', color: 'rgba(100,100,100,1)'}} >{selectedDate.getDate()}/{selectedDate.getMonth() + 1}/{selectedDate.getFullYear()}</Text>
                                    </TouchableOpacity>
                                        {showDatePicker && (
                                            <DateTimePicker
                                            value={selectedDate}
                                            mode="date"
                                            display="default"
                                            onChange={handleDateChange}
                                            />
                                            )}
                                </View>
                                <View style={{width: '50%', paddingLeft: 5, paddingRight: 5}}>
                                    <Text style={style.name}> Hora: </Text>
                                    <TouchableOpacity  style={[style.input, {justifyContent: 'center', width: '100%'}]} onPress={() => {setShowTimePicker(true)}}>
                                        {selectedTime && (<Text style={{textAlign: 'center', fontSize: 18, fontWeight: '500', color: 'rgba(100,100,100,1)'}}>{selectedTime.toLocaleTimeString('pt-BR')}</Text>)}
                                    </TouchableOpacity>
                                        {showTimePicker && (
                                            <DateTimePicker
                                            value={selectedTime}
                                            mode="time"
                                            display="default"
                                            onChange={handleTimeChange}
                                            />
                                            )}
                                </View>
                            </View>
                        </View>
                        <View style={style.label}>
                            <Text style={style.name}> Cor da anotação: </Text>                           
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                style={{borderRadius: 10, backgroundColor : '#fff'}}
                                >
                                <Picker.Item label="Azul" value="blue" />
                                <Picker.Item label="Verde" value="green" />
                                <Picker.Item label="vermelho" value="red" />
                            </Picker>
                        </View>
                        <View style={style.label}>
                            <TouchableOpacity activeOpacity={0.9} style={style.submit}>
                                <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            
            </Modalize>

    );
}