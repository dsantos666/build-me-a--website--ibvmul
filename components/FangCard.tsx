
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ImageSourcePropType } from 'react-native';
import { colors } from '@/styles/commonStyles';

export interface FangItem {
  id: string;
  name: string;
  price: string;
  imageUrl: string | ImageSourcePropType;
  description: string;
}

interface FangCardProps {
  fang: FangItem;
  onPress?: () => void;
}

export default function FangCard({ fang, onPress }: FangCardProps) {
  const imageSource = typeof fang.imageUrl === 'string' 
    ? { uri: fang.imageUrl } 
    : fang.imageUrl;

  return (
    <Pressable 
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
      onPress={onPress}
    >
      <Image 
        source={imageSource} 
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{fang.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{fang.description}</Text>
        <Text style={styles.price}>{fang.price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    boxShadow: '0px 4px 12px rgba(255, 65, 54, 0.2)',
    elevation: 4,
  },
  cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 12,
    lineHeight: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.primary,
  },
});
