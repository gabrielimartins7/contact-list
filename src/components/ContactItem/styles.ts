import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 288px;
    height: 52px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    margin-left: 30px;
    margin-top: 4px;
`;

export const Content = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.input_border};
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    margin-left: 16px;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TextName = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: ${({ theme }) => theme.fonts.bold};
`;