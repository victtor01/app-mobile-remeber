import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text , ScrollView, Image} from "react-native";
import { DrawerContentScrollView , DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { SafeAreaView } from "react-native-safe-area-context";
import User from "../user";
import MyStack from "../stack";

const Drawer = createDrawerNavigator();

import AddNote from "../note";
import style from "./style";

function CustomDrawerContent(props) {
    return (
      <ScrollView>
        <SafeAreaView>
            <View style={style.background}>
                <Image 
                resizeMode="cover" 
                source={require('../../assets/images/gelo.png')}
                style={{
                    height: '100%',
                    position: 'absolute'
                    }}
                />
                <View style={style.photo}>
                    {/* aqui ficará foto */}
                </View>
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>
      </ScrollView>
    );
}

function MyDrawer() {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawerContent {...props} />} 
      drawerStyle={{ backgroundColor: '#f2f2f2' }} // aqui você personalizou o estilo
    >
        <Drawer.Screen options={{headerStyle:{backgroundColor: '#2c4d56'}, headerTintColor: '#fff'}} component={MyStack} name='Lembreme'/>
        <Drawer.Screen component={User} name='user'/>
        <Drawer.Screen options={{headerStyle: {backgroundColor: '#fff'}}} component={AddNote} name='AddNote'/>
    </Drawer.Navigator>
  );
}

export default MyDrawer