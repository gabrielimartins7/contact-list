import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';
import { Buttom } from '../../components/Buttom';
import { StackNavigationProp } from '@react-navigation/stack';

export function Login(){
    const navigation = useNavigation<StackNavigationProp<RootParamList>>();

    function handleLogin(){
        navigation.navigate('contact')
    }

    return (
        <Container>
            <Title>Login</Title>
            <Buttom title='Fazer login com a Huggy' onPress={handleLogin}/>
        </Container>
    );
}