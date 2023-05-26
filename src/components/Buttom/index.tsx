import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { ContainerButtom, Text, PlusIcon } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    icon?: boolean;
}

export function Buttom({ title, icon, ...rest }: Props){
    return (
        <ContainerButtom {...rest}>
            {icon && <PlusIcon />}
            <Text>{title}</Text>
        </ContainerButtom>
    );
}