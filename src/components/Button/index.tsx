import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator, TextStyle } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: 'primary' | 'secondary';
  loading?: boolean;
  textStyle?: TextStyle; 
};

export function Button({ title, onPress, disabled, loading = false, style, textStyle }: Props) {
  const isDisabled = !!disabled || !!loading;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.button, style, isDisabled ? { opacity: 0.6 } : null]}
      activeOpacity={0.6}
    >
      {loading ? (
        <ActivityIndicator color="#fff" animating={true} />
      ) : (
        <Text style={[styles.textbutton, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

