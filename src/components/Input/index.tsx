import React from 'react';
import { useTheme } from 'styled-components';

import { Container, TextInput, ErrorText } from './styles';

interface TextInputProps {
    placeholder?: string;
    value?: string;
    onChangeText: (value: string) => void;
    error?: string;
}

export function Input({ placeholder, value, onChangeText, error}: TextInputProps){
    const theme = useTheme();

    return (
        <Container>
            <TextInput 
                placeholder={placeholder} 
                value={value} 
                onChangeText={onChangeText} 
                style={{ borderColor: error ? theme.colors.errors : theme.colors.input_border}}
            />
            {error ? <ErrorText>{error}</ErrorText> : null}
        </Container>
    );
}