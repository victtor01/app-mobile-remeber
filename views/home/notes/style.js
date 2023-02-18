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
        backgroundColor: '#fff',
        height: 80,
        marginBottom: 10,
        maxWidth: '100%',
        borderRadius: 7,
        justifyContent: 'center',
        paddingLeft: 20,
        margin: 20,
        marginTop: 30
    },
})

export default style;