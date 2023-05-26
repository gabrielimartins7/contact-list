import styled from 'styled-components/native';
import { MagnifyingGlass, SignOut, Plus, X } from 'phosphor-react-native';

import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
    width: 100%;
    height: 56px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: ${getStatusBarHeight()};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-left: 16px;
`;

export const Content = styled.View`
    flex-direction: row;
`;

export const IconButton = styled.TouchableOpacity``;

export const SearchIcon = styled(MagnifyingGlass).attrs(({ theme }) => ({
    color: theme.colors.text,
    size: 18,
}))`
    margin-right: 20px;
`;

export const SearchCloseIcon = styled(X).attrs(({ theme }) => ({
    color: theme.colors.text,
    size: 18,
}))`
    margin-right: 20px;
`;

export const ContentSearch = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const SignIcon = styled(SignOut).attrs(({ theme }) => ({
    color: theme.colors.text,
    size: 18,
}))`
    margin-right: 20px;
`;

export const AddContact = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.text_light};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: 24px;
`;

export const Logo = styled.Image`
    margin-bottom: 16px;
`;

export const ButtonAdd = styled.TouchableOpacity`
    width: 48px;
    height: 48px;
    position: absolute;
    bottom: 16px;
    right: 16px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const AddIcon = styled(Plus).attrs(({ theme }) => ({
    color: theme.colors.shape,
    size: 18,
}))``;

export const SearchText = styled.TextInput`
    width: 200px;
    height: 35px;
    border-radius: 12px;
    padding: 18px 16px;
    border: 1px solid ${({ theme }) => theme.colors.input_border};
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.text};
`;