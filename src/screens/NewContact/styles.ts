import styled from 'styled-components/native';
import { X } from 'phosphor-react-native';

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
    border-bottom-width: 1;
    border-bottom-color: ${({ theme }) => theme.colors.border};
`;

export const ContentHeader = styled.View`
    flex-direction: row;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-left: 16px;
`;

export const CloseIcon = styled(X).attrs(({ theme }) => ({
    color: theme.colors.text,
    size: 18,
}))`
    margin-right: 30px;
    margin-left: 20px;
`;

export const SaveContent = styled.TouchableOpacity`
    width: 70px;
    height: 36px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

export const SaveText = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ContainerInput = styled.View`
    margin-top: 16px;
    align-items: center;
`;
