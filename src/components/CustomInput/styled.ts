import { StyleSheet, Dimensions } from 'react-native';

const totalWidth = Dimensions.get('window').width;

export default StyleSheet.create({    
    customInput: {
        borderWidth: 1,
        borderColor: '#CCC',
        width: totalWidth - 70,
        height: 50,
        paddingHorizontal: 10,
        marginVertical: 15,
    }
});