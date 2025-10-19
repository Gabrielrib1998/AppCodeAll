import React, { forwardRef, LegacyRef, useState} from "react";
import { Text, StyleSheet, Image, TextInput, TouchableOpacity, View, Alert, ActivityIndicator, TextInputProps} from "react-native";
import {styles} from "./styles";
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
import { theme } from "../../global/themes";

type Iconcomponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> 
                   | React.ComponentType<React.ComponentProps<typeof FontAwesome>> 
                   | React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: Iconcomponent,
    IconRight?: Iconcomponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,

}

type InputProps = {
    email: string;
    password: string;
    onChangeEmail: (text: string) => void;
    onChangePassword: (text: string) => void;
};

export const Input = forwardRef((Props:Props, ref:LegacyRef<TextInput>) => {
    const { IconLeft, IconRight, IconLeftName, IconRightName, title, onIconLeftPress, onIconRightPress, secureTextEntry, ...rest } = Props;
    const secure = !!secureTextEntry;


    return (
      <>
        {title && <Text style={styles.title}>{title}</Text>}
        <View style={styles.boxInput}>
            <TouchableOpacity onPress={onIconLeftPress}>
                {IconLeft && (
                    <IconLeft name={IconLeftName as any} size={24} color={theme.colors.gray} style={styles.icon} />
                )}
            </TouchableOpacity>
            <TextInput
               style={styles.input}
               ref={ref}
               secureTextEntry={!! secureTextEntry}
               {...rest}
            />
        <TouchableOpacity onPress={onIconRightPress}>
           {IconRight && (
               <IconRight name={IconRightName as any} size={24} color={theme.colors.gray} style={styles.icon} />
            )}
        </TouchableOpacity>
            </View>
      </>
    );
});

