
import React from 'react';
import { ScrollView, StyleSheet, View, Text, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import FangCard, { FangItem } from '@/components/FangCard';

const allFangs: FangItem[] = [
  {
    id: '1',
    name: 'Nightmare Sets',
    price: '$249.99',
    imageUrl: require('@/assets/images/33233a51-0686-4ef1-b4ee-2efa273630be.jpeg'),
    description: 'Classic vampire fangs with a terrifying edge. Double set featuring upper and lower fangs for maximum impact.',
  },
  {
    id: '2',
    name: 'Double Fang Set - Premium',
    price: '$249.99',
    imageUrl: require('@/assets/images/b0068494-991b-45fa-9446-4cead555bb4e.jpeg'),
    description: 'Premium custom-fitted double fangs with medical-grade materials. Perfect for serious cosplay and events.',
  },
  {
    id: '3',
    name: 'Blood Moon Fangs',
    price: '$179.99',
    imageUrl: 'https://images.unsplash.com/photo-1570993492903-ba4c3088f100?w=800',
    description: 'Premium custom-fitted fangs with a crimson tint. Made with medical-grade materials.',
  },
  {
    id: '4',
    name: 'Shadow Fangs',
    price: '$129.99',
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    description: 'Sleek and subtle fangs for everyday wear. Comfortable and realistic design.',
  },
  {
    id: '5',
    name: 'Crimson Bite',
    price: '$199.99',
    imageUrl: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800',
    description: 'Our most popular design. Sharp, elegant, and intimidating. Custom color options available.',
  },
  {
    id: '6',
    name: 'Twilight Fangs',
    price: '$159.99',
    imageUrl: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800',
    description: 'Elegant and refined fangs with a subtle curve. Perfect for formal events.',
  },
  {
    id: '7',
    name: 'Demon Fangs',
    price: '$189.99',
    imageUrl: 'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=800',
    description: 'Aggressive and bold design. Features extended canines for maximum impact.',
  },
  {
    id: '8',
    name: 'Gothic Fangs',
    price: '$169.99',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
    description: 'Victorian-inspired design with intricate detailing. A true work of art.',
  },
  {
    id: '9',
    name: 'Midnight Fangs',
    price: '$139.99',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    description: 'Sleek black-tinted fangs for a mysterious look. Comfortable for all-day wear.',
  },
];

export default function GalleryScreen() {
  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: 'Fang Gallery',
          }}
        />
      )}
      <View style={commonStyles.container}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            Platform.OS !== 'ios' && styles.scrollContentWithTabBar
          ]}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Our Collection</Text>
          <Text style={styles.subtitle}>
            Browse our complete collection of custom fang caps. Each design is handcrafted 
            and custom-fitted to your teeth for maximum comfort and style.
          </Text>

          {allFangs.map((fang) => (
            <FangCard 
              key={fang.id} 
              fang={fang}
              onPress={() => console.log('Fang pressed:', fang.name)}
            />
          ))}

          <View style={styles.customSection}>
            <Text style={styles.customTitle}>Want Something Unique?</Text>
            <Text style={styles.customText}>
              We offer fully custom designs! Contact us to discuss your vision and we&apos;ll 
              create a one-of-a-kind set of fangs just for you.
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  scrollContentWithTabBar: {
    paddingBottom: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 24,
    lineHeight: 24,
  },
  customSection: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: colors.accent,
  },
  customTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.accent,
    marginBottom: 12,
  },
  customText: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
});
