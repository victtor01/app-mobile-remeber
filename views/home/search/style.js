import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        height: 65,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10
    },  
    search : {
        backgroundColor: 'blue',
        height: '100%',
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 1,
        padding: 10,
        paddingLeft: 14,
    },
    buttonSearch: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 100,
        height: 43,
        width: 43,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'

    }
})

export default style;