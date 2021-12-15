import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { CustomInput } from '../../components/CustomInput';
import styles from './styled';

export default function Login() {
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

    return (
      <View style={{...styles.container}}>            
        <Text style={{...styles.formContentTitle}}>Olá , tudo bom ? 🤖 {"\n"}
        Vou precisar das suas credênciais ...
        {mail}
        </Text>        
        <View style={{marginTop: 100}}>
          <CustomInput handleChange={(text) => { setMail(text); }} label="Digite o seu e-mail" value={mail} />
          <CustomInput handleChange={(text) => { setPassword(text); }} label="Digite sua senha" value={password} />
        <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={{ backgroundColor: 'blue' }}>
          <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }