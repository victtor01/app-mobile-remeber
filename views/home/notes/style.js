import { Children } from "react";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container : {
        position: 'relative',
        height: '100%',
        flex: 1,
        /* backgroundColor: '#ceecef', */
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '100%',
    },
    box: {
        backgroundColor: 'rgba(240,240,240,1)',
        height: 80,
        marginBottom: 10,
        maxWidth: '100%',
        borderRadius: 15,
        justifyContent: 'center',
        paddingLeft: 20,
        margin: 20,
        marginTop: 30,
        position: 'relative'
    },
})

export default style;