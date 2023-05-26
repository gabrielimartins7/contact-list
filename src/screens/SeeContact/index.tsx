import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { deleteContact } from '../../services/contactServices';

import { 
    Container, 
    Header, 
    ContentHeader, 
    CloseIcon, 
    RemoveContent, 
    RemoveIcon, 
    ContentContact,
    HeaderContact,
    Name,
    SubTitle,
    DetailsContent,
    Details,
    LabelDetails,
    Label,
    Description,
    LabelState,
    ButtonEdit,
    EditIcon,
    EditText,
 } from './styles';

 type ContactProps = StackScreenProps<RootParamList, 'see'>

export function SeeContact({ route }: ContactProps){
    const { contact } = route.params;
    const navigation = useNavigation<StackNavigationProp<RootParamList>>();

    function handleClose(){
        navigation.goBack()
    }

    function handleRemove(){
        deleteContact(contact).then(() => navigation.goBack())
    }

    function handleEditContact(contact: Contact){
        navigation.navigate('edit', {contact})
    }

    return (
        <Container>
            <Header>
                <ContentHeader onPress={handleClose}>
                    <CloseIcon />
                </ContentHeader>
                <RemoveContent onPress={handleRemove}>
                    <RemoveIcon />
                </RemoveContent>
            </Header>
            <ContentContact>
                <HeaderContact>
                    <Name>{contact.name}</Name>
                    <SubTitle>{contact.id}</SubTitle>
                </HeaderContact>
                <DetailsContent>
                    <Details>Detalhes</Details>
                    <LabelDetails>
                        <Label>Nome</Label>
                        <Description>{contact.name}</Description>
                    </LabelDetails>
                    <LabelDetails>
                        <Label>E-mail</Label>
                        <Description>{contact.email}</Description>
                    </LabelDetails>
                    <LabelDetails>
                        <Label>Telefone</Label>
                        <Description>{contact.phone}</Description>
                    </LabelDetails>
                    <LabelDetails>
                        <Label>Celular</Label>
                        <Description>{contact.mobile}</Description>
                    </LabelDetails>
                    <Details>Endereço</Details>
                    <LabelDetails>
                        <Label>Endereço</Label>
                        <Description>{contact.address}</Description>
                    </LabelDetails>
                    <LabelDetails>
                        <Label>Bairro</Label>
                        <Description>{contact.district}</Description>
                    </LabelDetails>
                    <LabelDetails>
                        <Label>Cidade</Label>
                        <Description>{contact.city}</Description>
                    </LabelDetails>
                    <LabelState>
                        <Label>Estado</Label>
                        <Description>{contact.state}</Description>
                    </LabelState>
                </DetailsContent>
            </ContentContact>
                <ButtonEdit onPress={() => handleEditContact(contact)}>
                    <EditIcon/>
                    <EditText>Editar contato</EditText>
                </ButtonEdit>
        </Container>
    );
}