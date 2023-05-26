import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { Plus } from 'phosphor-react-native';

export const ContainerButtom = styled(TouchableOpacity)`
    width: 208px;
    height: 36px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
    color: theme.colors.shape,
    size: 18,
}))`
    margin-right: 14px;
`;