import { StyleSheet, Dimensions } from 'react-native';


const totalWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,        
        alignItems: 'flex-start',        
        // backgroundColor: '#000',
        backgroundColor: '#FFF',
    },
    formContentTitle: {
        fontSize: 22,
        lineHeight: 35,        
        // color: '#1ff431',
    },
    formInput: {
        borderWidth: 1,
        borderColor: '#CCC',
        width: totalWidth - 70,
        height: 50,
        paddingHorizontal: 10,
        marginVertical: 15,
    }
});