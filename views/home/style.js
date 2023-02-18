import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container : {
        height: '100%',
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
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        ...StyleSheet.absoluteFillObject
    }

})

export default style;