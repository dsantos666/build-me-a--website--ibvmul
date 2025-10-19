
import React from 'react';
import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, View, Text, Pressable, Platform } from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import { useTheme } from '@react-navigation/native';
import { colors, commonStyles } from '@/styles/commonStyles';
import FangCard, { FangItem } from '@/components/FangCard';
import { useRouter } from 'expo-router';

const featuredFangs: FangItem[] = [
  {
    id: '1',
    name: 'Nightmare Fangs',
    price: '$149.99',
    imageUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800',
    description: 'Classic vampire fangs with a terrifying edge. Perfect for Halloween or cosplay.',
  },
  {
    id: '2',
    name: 'Blood Moon Fangs',
    price: '$179.99',
    imageUrl: 'https://images.unsplash.com/photo-1570993492903-ba4c3088f100?w=800',
    description: 'Premium custom-fitted fangs with a crimson tint. Made with medical-grade materials.',
  },
  {
    id: '3',
    name: 'Shadow Fangs',
    price: '$129.99',
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800',
    description: 'Sleek and subtle fangs for everyday wear. Comfortable and realistic.',
  },
];

export default function HomeScreen() {
  const theme = useTheme();
  const router = useRouter();

  const renderHeaderRight = () => (
    <Pressable
      onPress={() => router.push('/(tabs)/gallery')}
      style={styles.headerButtonContainer}
    >
      <IconSymbol name="square.grid.3x3" color={colors.primary} />
    </Pressable>
  );

  const renderHeaderLeft = () => (
    <Pressable
      onPress={() => router.push('/(tabs)/faq')}
      style={styles.headerButtonContainer}
    >
      <IconSymbol name="questionmark.circle" color={colors.primary} />
    </Pressable>
  );

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: 'Nightmare Fangs',
            headerRight: renderHeaderRight,
            headerLeft: renderHeaderLeft,
          }}
        />
      )}
      <View style={[commonStyles.container]}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            Platform.OS !== 'ios' && styles.scrollContentWithTabBar
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.hero}>
            <Text style={styles.heroTitle}>NIGHTMARE FANGS</Text>
            <Text style={styles.heroSubtitle}>Custom Fang Caps & Dental Art</Text>
            <Text style={styles.heroDescription}>
              Transform your smile with our premium custom-fitted fang caps. 
              Handcrafted with medical-grade materials for comfort and style.
            </Text>
          </View>

          <View style={styles.ctaContainer}>
            <Pressable 
              style={styles.ctaButton}
              onPress={() => router.push('/(tabs)/appointment')}
            >
              <Text style={styles.ctaButtonText}>Book Appointment</Text>
            </Pressable>
            <Pressable 
              style={styles.ctaButtonSecondary}
              onPress={() => router.push('/(tabs)/gallery')}
            >
              <Text style={styles.ctaButtonSecondaryText}>View Gallery</Text>
            </Pressable>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Designs</Text>
            {featuredFangs.map((fang) => (
              <FangCard 
                key={fang.id} 
                fang={fang}
                onPress={() => console.log('Fang pressed:', fang.name)}
              />
            ))}
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>Why Choose Nightmare Fangs?</Text>
            <View style={styles.infoItem}>
              <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={24} />
              <Text style={styles.infoText}>Custom-fitted for perfect comfort</Text>
            </View>
            <View style={styles.infoItem}>
              <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={24} />
              <Text style={styles.infoText}>Medical-grade materials</Text>
            </View>
            <View style={styles.infoItem}>
              <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={24} />
              <Text style={styles.infoText}>Professional installation</Text>
            </View>
            <View style={styles.infoItem}>
              <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={24} />
              <Text style={styles.infoText}>Lifetime warranty</Text>
            </View>
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
  hero: {
    alignItems: 'center',
    marginBottom: 32,
    paddingVertical: 20,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 2,
  },
  heroSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.accent,
    textAlign: 'center',
    marginBottom: 16,
  },
  heroDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  ctaContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  ctaButton: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  ctaButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  ctaButtonSecondary: {
    flex: 1,
    backgroundColor: colors.card,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  ctaButtonSecondaryText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 16,
  },
  headerButtonContainer: {
    padding: 6,
  },
  infoSection: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  infoText: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
  },
});
