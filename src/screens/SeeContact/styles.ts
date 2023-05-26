import styled from 'styled-components/native';
import { X, TrashSimple, PencilSimple } from 'phosphor-react-native';

import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 56px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: ${getStatusBarHeight()};
`;

export const ContentHeader = styled.TouchableOpacity`
    flex-direction: row;
`;

export const CloseIcon = styled(X).attrs(({ theme }) => ({
    color: theme.colors.text,
    size: 18,
}))`
    margin-right: 30px;
    margin-left: 20px;
`;

export const RemoveContent = styled.TouchableOpacity`
    width: 70px;
    height: 36px;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

export const RemoveIcon = styled(TrashSimple).attrs(({ theme }) => ({
    color: theme.colors.text,
    size: 20,
    weight: "fill"
}))`
    margin-left: 20px;
`;

export const ContentContact = styled.ScrollView``;

export const HeaderContact = styled.View`
    height: 180px;
    align-items: center;
    justify-content: center;

    border-bottom-width: 1;
    border-bottom-color: ${({ theme }) => theme.colors.border};
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-family: ${({ theme }) => theme.fonts.regular};
`;


export const DetailsContent = styled.View`
    margin-left: 16px;
    margin-right: 16px;
`;

export const Details = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.ss};
    font-family: ${({ theme }) => theme.fonts.bold};

    margin-top: 25px;
    margin-bottom: 25px;
`;

export const LabelDetails = styled.View`
    margin-bottom: 8px;
    border-bottom-width: 1;
    border-bottom-color: ${({ theme }) => theme.colors.border};
`;

export const Label = styled.Text`
    font-size: ${({ theme }) => theme.fontSize.ss};
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-top: 8px;
`;

export const Description = styled.Text`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-bottom: 8px;
`;

export const LabelState = styled.View`
    margin-bottom: 30px;
    border-bottom-width: 1;
    border-bottom-color: ${({ theme }) => theme.colors.border};
`;

export const ButtonEdit = styled.TouchableOpacity`
    width: 172px;
    height: 48px;
    position: absolute;
    bottom: 16px;
    right: 16px;
    border-radius: 28px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const EditIcon = styled(PencilSimple).attrs(({ theme }) => ({
    color: theme.colors.shape,
    size: 18,
    weight: "fill"
}))``;

export const EditText = styled.Text`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.shape};
    margin-left: 15px;
`;