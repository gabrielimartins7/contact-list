import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeModules } from 'react-native';

import { Container, Title } from './styles';
import { Buttom } from '../../components/Buttom';
import { StackNavigationProp } from '@react-navigation/stack';

export function Login(){
    const navigation = useNavigation<StackNavigationProp<RootParamList>>();

    const {ReactOneCustomMethod} = NativeModules;


    function handleLogin(){
        navigation.navigate('home')
    }

    useEffect(() => {
        ReactOneCustomMethod.getPhoneID()
      .then((res: string) => {
        console.log('ID: ' + res);
      })
      .catch((err: any) => {
        console.error(err);
      });
    }, [])

    return (
        <Container>
            <Title>Login</Title>
            <Buttom title='Fazer login com a Huggy' onPress={handleLogin}/>
        </Container>
    );
}