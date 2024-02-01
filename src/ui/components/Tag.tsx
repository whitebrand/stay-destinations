import React from 'react';
import { View, Text, ViewStyle, StyleSheet } from 'react-native';
import styles from './Tag.styles';

export type TagProps = {
  title: string;
  style?: ViewStyle; 
};

const Tag: React.FC<TagProps> = ({ title, style }) => {
  const containerCombinedStyle = StyleSheet.flatten([styles.container, style]);

  return (
    <View style={containerCombinedStyle} testID="tag">
      <Text style={styles.label}>{title}</Text>
    </View>
  );
};

export default Tag;
