import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: 'primary' | 'secondary';
  loading?: boolean;
};

export function Button({ title, onPress, disabled, loading = false, style }: Props) {
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
        <Text style={styles.textbutton}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

