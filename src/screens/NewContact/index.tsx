import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createContact } from '../../services/contactServices';

import { Input } from '../../components/Input';

import {
    Container,
    Header,
    Title,
    CloseIcon,
    SaveContent,
    SaveText,
    ContentHeader,
    ContainerInput,
} from './styles';

interface NewContactForm {
    name?: string;
    email?: string;
    phone?: string;
    mobile?: string;
    address?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
}

export function NewContact(){
    const [form, setForm] = useState<NewContactForm>({});
    const [formError, setFormError] = useState<NewContactForm>({});

    const navigation = useNavigation();

    function handleContact(){
        if(validate() && form.name && form.email && form.mobile) {
            const newContact: NewContactParams = {
                name: form.name,
                email: form.email,
                mobile: form.mobile,
                phone: form.phone,
                address: form.address,
                city: form.city,
                state: form.state,
                district: form.neighborhood
            }
            createContact(newContact).then(response => {
                navigation.goBack()
                console.log(response.data)
            }).catch(error => console.log(error))
        }
    }

    const validate = () => {
        const newErrors: NewContactForm = {};
        if (!form.name) {
            newErrors.name = 'Campo obrigatório'
        }
        if (!form.email) {
            newErrors.email = 'Campo obrigatório'
        }
        if (!form.mobile) {
            newErrors.mobile = 'Campo obrigatório'
        }
        setFormError(newErrors);
        return Object.keys(newErrors).length === 0
    }

    return (
        <Container>
            <Header>
                <ContentHeader>
                    <CloseIcon />
                    <Title>Criar contato</Title>
                </ContentHeader>
                <SaveContent onPress={handleContact}>
                    <SaveText>Salvar</SaveText>
                </SaveContent>
            </Header>
            <ContainerInput>
                <Input
                    placeholder='Nome'
                    value={form.name}
                    error={formError.name}
                    onChangeText={text => setForm({...form, name: text})}
                />
                <Input
                    placeholder='E-mail'
                    value={form.email} 
                    error={formError.email}
                    onChangeText={text => setForm({...form, email: text})} 
                />
                <Input 
                    placeholder='Telefone' 
                    value={form.phone} 
                    onChangeText={text => setForm({...form, phone: text})} 
                />
                <Input 
                    placeholder='Celular' 
                    value={form.mobile}
                    error={formError.mobile}
                    onChangeText={text => setForm({...form, mobile: text})} 
                />
                <Input 
                    placeholder='Endereço' 
                    value={form.address} 
                    onChangeText={text => setForm({...form, address: text})} 
                />
                <Input 
                    placeholder='Bairro' 
                    value={form.neighborhood} 
                    onChangeText={text => setForm({...form, neighborhood: text})} 
                />
                <Input 
                    placeholder='Cidade' 
                    value={form.city} 
                    onChangeText={text => setForm({...form, city: text})}
                />
                <Input
                    placeholder='Estado' 
                    value={form.state} 
                    onChangeText={text => setForm({...form, state: text})} 
                />
            </ContainerInput>
        </Container>
    );
}