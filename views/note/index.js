import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, TextInput} from "react-native";
import style from "./style";

export default function AddNote()
{
    return (
        <View style={style.container}>
            <StatusBar style="auto"/>
            <View style={style.header}>
                <View style={style.spanHeader} />
            </View>
            <ScrollView style={{flex: 1}}>
                <View style={style.content}>
                    <View style={style.headerContent}>
                        <Text style={style.headerTitle}>
                            Nova anotação
                        </Text>
                    </View>
                    <View>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}