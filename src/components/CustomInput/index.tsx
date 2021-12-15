import React from 'react'
import { TextInput, View, TextInputProps } from 'react-native';
import styled from './styled';

interface CustomInputProps extends TextInputProps {
    label: string;
    value: string;    
    handleChange: (text: string) => void;
}

function CustomInput(props : CustomInputProps) { 
    const { label, value, handleChange } = props;

    return (
        <View>
            <TextInput    
                style={styled.customInput}            
                onChangeText={handleChange}
                value={value}
                placeholder={label}
              />
        </View>
    );
}

export { 
    CustomInput
};