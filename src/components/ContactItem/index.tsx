import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, Text, TextName } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
    contact: Contact;
}

export function ContactItem({ contact }: Props){
    const navigation = useNavigation<StackNavigationProp<RootParamList>>();

    function handleSeeContact(){
        navigation.navigate('see', { contact })
    }

    return (
        <Container onPress={handleSeeContact}>
            <Content>
                <TextName>
                    {contact.name.split(' ').map(n => n[0]).join('')}
                </TextName>
            </Content>
            <Text>{contact.name}</Text>
        </Container>
    );
}