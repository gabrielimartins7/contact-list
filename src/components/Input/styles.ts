import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 16px;
`;

export const TextInput = styled.TextInput`
    width: 330px;
    height: 56px;
    border-radius: 12px;
    padding: 18px 16px;
    border: 1px solid ${({ theme }) => theme.colors.input_border};
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.text};
`;

export const ErrorText = styled.Text`
    color: ${({ theme }) => theme.colors.errors};
    font-size: 12px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;