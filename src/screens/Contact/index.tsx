import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList } from 'react-native';

import { getContacts } from '../../services/contactServices';

import { Buttom } from '../../components/Buttom';
import { ContactItem } from '../../components/ContactItem';

import LogoImg from '../../assets/logoImg.png';

import { 
    Container,
    Header,
    Title,
    Content,
    IconButton,
    SearchIcon,
    SignIcon,
    AddContact,
    Text,
    Logo,
    ButtonAdd,
    AddIcon,
} from './styles';

export function Contact(){
    const [contacts, setContacts] = useState<Contact[]>([]);
    const navigation = useNavigation<StackNavigationProp<RootParamList>>();

    useEffect(() => {
        getContacts().then(response => setContacts(response.data)).catch(error => console.log(error))
    }, []) 

    function handleOut(){
        navigation.navigate('login')
    }

    function handleNewContact(){
        navigation.navigate('new')
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getContacts().then(response => setContacts(response.data)).catch(error => console.log(error))
        });
    
      return unsubscribe;
    }, [navigation]);

    return (
        <Container>
            <Header>
                <Title>Contatos</Title>
                <Content>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>

                    <IconButton onPress={handleOut}>
                        <SignIcon />
                    </IconButton>
                </Content>
            </Header>

            {contacts.length > 0 ? 
                <FlatList 
                    data={contacts}
                    renderItem={({item}) => <ContactItem contact={item} />
                    }
                /> 
                : <AddContact>
                    < Logo source={LogoImg} />
                    <Text>Ainda não há contatos</Text>
                    <Buttom title='Adicionar contato' icon onPress={handleNewContact} />
                </AddContact>
            }
            <ButtonAdd onPress={handleNewContact}>
                <AddIcon />
            </ButtonAdd>
        </Container>
    );
}