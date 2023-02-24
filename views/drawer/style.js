import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    background: {
        height: 150,
        backgroundColor: 'rgba(240,240,240,1)',
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative'
    },
    photo: {
        width: 90, 
        height: 90,
        borderRadius: 100,
        backgroundColor: '#fff',
        transform : [{translateY: 35}],
        elevation: 10,
        shadowColor: 'rgba(200,200,200,1)'
    }
})

export default style