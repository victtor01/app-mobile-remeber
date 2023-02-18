import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0)',
        position: 'relative',
        flex: 1,
        height: '100%'
    },  
    header: {
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        width: '100%',
        position: 'absolute'
    },
    spanHeader : {
        backgroundColor: 'rgba(230,230,230,1)',
        height: 10,
        width: 100,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1
    },
    content: {
        height: 'auto',
        width: '100%',
        paddingTop: 35
    },
    headerContent: {
        height: 60,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '500',
        color: 'rgba(150,150,150,1)'
    }
})

export default style