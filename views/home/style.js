import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container : {
        height: '100%',
        position: 'relative',
        flex: 1
    },
    modalContainer: {
        width: '100%',
        borderRadius: 10,
        height: '100%', 
    },
    modalContent: {
        backgroundColor: '#fff',
        height: '100%',
    },
    modalText: {
        fontSize: 16,
        color: 'red'
    },
    background: {
        minHeight: '111%',
        flex: 1,
        position: 'absolute'
    },

})

export default style;