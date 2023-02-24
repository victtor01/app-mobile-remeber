import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    dismissable: {
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
    container: {
        backgroundColor: '#fff',
        position: 'absolute',
        flex: 1,
        height: '100%',
        overflow: 'hidden',
        elevation: 1000,
    },  
    header: {
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: 3,
    },
    background: {
        minHeight: '111%',
        flex: 1,
        position: 'absolute',
    },
    spanHeader : {
        backgroundColor: 'rgba(0,0,0,1)',
        height:7,
        width: 90,
        borderRadius: 20,
    },
    content: {
        height: 'auto',
        width: '100%',
        marginTop: 20,
    },
    headerContent: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: 'rgba(150,150,150,1)',
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 5,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center',
    },
    form: {
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        paddingLeft: 10,
        paddingRight: 10
    },
    label: {
        width: '100%',
        padding: 16,
    },
    input: {
        backgroundColor: 'rgba(254,254,254,1)',
        width: '100%',
        height: 65,
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        fontWeight: '500',
        borderColor: 'rgba(200,200,200,1)',
        borderWidth: 1,
        borderColor: 'rgba(200,200,200,1)',
    },
    name : {
        color: '#2c4d56',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 3,
    },
    submit : {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        height: 70,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#2c4d56'
    },
})

export default style