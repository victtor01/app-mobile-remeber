import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container : {
        height: 56,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10
    },
    content: {
        padding: 8
    },
    box: {
        marginLeft: 10,
        marginRight: 15,
        backgroundColor: '#fff',
        elevation: 1,
        borderRadius: 30,
        width: 120,
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameBox: {
        fontSize: 15,
        color: 'rgba(100,100,100,0.98)'
    }
})

export default style;