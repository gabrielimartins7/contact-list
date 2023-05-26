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
    SearchCloseIcon,
    SearchText,
    ContentSearch,
} from './styles';

export function Contact(){
    const navigation = useNavigation<StackNavigationProp<RootParamList>>();
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [searchResult, setSearchResult] = useState<Contact[]>([]);
    const [searchText, setSearchText] = useState('');
    const [search, setSearch] = useState(false);

    useEffect(() => {
        getContacts().then(response => setContacts(response.data)).catch(error => console.log(error))
    }, []) 

    function handleOut(){
        navigation.navigate('login')
    }

    function handleNewContact(){
        navigation.navigate('new')
    }

    function handleSearch(){
        setSearch(!search)
    }

    function handleSearchResult(searchText: string){
        const result = contacts.filter(contact => contact.name.toLowerCase()
        .indexOf(searchText.toLowerCase()) > -1);
        setSearchResult(result);
        console.log(result);
    }

    useEffect(() => {
        if(!search) setSearchResult(contacts)
    }, [search]);

    useEffect(() => {
        if(searchText.length){
            handleSearchResult(searchText)
        }else{
            setSearchResult(contacts)
        }
    }, [searchText]);

    useEffect(() => {
        setSearchResult(contacts)
    }, [contacts]);

    useEffect(() => {}, [searchResult]);


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
                    <IconButton onPress={handleSearch}>
                        { search ? 
                        <>
                            <ContentSearch>
                                <SearchText 
                                    onChangeText={setSearchText} 
                                    value={searchText} 
                                    placeholder='Pesquisar' 
                                />
                                <SearchCloseIcon/>
                            </ContentSearch>
                        </>
                        : <SearchIcon/>}
                    </IconButton>

                    <ContentSearch>
                        <IconButton onPress={handleOut}>
                            <SignIcon />
                        </IconButton>
                    </ContentSearch>
                </Content>
            </Header>

            {searchResult.length > 0 ? 
                <FlatList 
                    data={searchResult}
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