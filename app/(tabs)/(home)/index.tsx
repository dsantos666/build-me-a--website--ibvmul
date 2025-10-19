
import React from 'react';
import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, View, Text, Pressable, Platform, Image } from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import { useTheme } from '@react-navigation/native';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useRouter } from 'expo-router';

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
          </View>

          {/* Featured Single Set of Fangs */}
          <View style={styles.featuredCard}>
            <View style={styles.imageContainer}>
              <Image 
                source={require('@/assets/images/3da0d428-4ec9-44fa-8d92-ddf541750e7b.jpeg')}
                style={styles.fangImage}
                resizeMode="cover"
              />
            </View>
            
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Single Set of Fangs</Text>
              <Text style={styles.productPrice}>$149.99</Text>
              <Text style={styles.productDescription}>
                Premium custom-fitted vampire fangs crafted with medical-grade materials. 
                These classic fangs provide a comfortable fit and realistic appearance, 
                perfect for cosplay, Halloween, or everyday wear.
              </Text>

              <View style={styles.features}>
                <View style={styles.featureItem}>
                  <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={20} />
                  <Text style={styles.featureText}>Custom-fitted for comfort</Text>
                </View>
                <View style={styles.featureItem}>
                  <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={20} />
                  <Text style={styles.featureText}>Medical-grade materials</Text>
                </View>
                <View style={styles.featureItem}>
                  <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={20} />
                  <Text style={styles.featureText}>Professional installation</Text>
                </View>
                <View style={styles.featureItem}>
                  <IconSymbol name="checkmark.circle.fill" color={colors.primary} size={20} />
                  <Text style={styles.featureText}>Lifetime warranty</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Call to Action Buttons */}
          <View style={styles.ctaContainer}>
            <Pressable 
              style={styles.ctaButton}
              onPress={() => router.push('/(tabs)/appointment')}
            >
              <IconSymbol name="calendar" color={colors.text} size={20} />
              <Text style={styles.ctaButtonText}>Book Appointment</Text>
            </Pressable>
            <Pressable 
              style={styles.ctaButtonSecondary}
              onPress={() => router.push('/(tabs)/gallery')}
            >
              <IconSymbol name="photo.stack" color={colors.primary} size={20} />
              <Text style={styles.ctaButtonSecondaryText}>View Gallery</Text>
            </Pressable>
          </View>

          {/* Additional Info Section */}
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>How It Works</Text>
            
            <View style={styles.stepCard}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Book Appointment</Text>
                <Text style={styles.stepDescription}>
                  Schedule a consultation to discuss your design preferences
                </Text>
              </View>
            </View>

            <View style={styles.stepCard}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Custom Fitting</Text>
                <Text style={styles.stepDescription}>
                  We take precise measurements for a perfect fit
                </Text>
              </View>
            </View>

            <View style={styles.stepCard}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Professional Installation</Text>
                <Text style={styles.stepDescription}>
                  Expert installation ensures comfort and durability
                </Text>
              </View>
            </View>
          </View>

          {/* Contact Section */}
          <View style={styles.contactSection}>
            <Text style={styles.contactTitle}>Have Questions?</Text>
            <Text style={styles.contactText}>
              Check out our FAQ section or book an appointment to speak with our specialists.
            </Text>
            <Pressable 
              style={styles.faqButton}
              onPress={() => router.push('/(tabs)/faq')}
            >
              <Text style={styles.faqButtonText}>View FAQ</Text>
            </Pressable>
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
    marginBottom: 24,
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
  },
  featuredCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    boxShadow: '0px 8px 24px rgba(255, 65, 54, 0.3)',
    elevation: 8,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: colors.background,
  },
  fangImage: {
    width: '100%',
    height: '100%',
  },
  productInfo: {
    padding: 20,
  },
  productName: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.primary,
    marginBottom: 16,
  },
  productDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 20,
  },
  features: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureText: {
    fontSize: 15,
    color: colors.text,
    flex: 1,
  },
  ctaContainer: {
    gap: 12,
    marginBottom: 32,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    boxShadow: '0px 4px 12px rgba(255, 65, 54, 0.4)',
    elevation: 4,
  },
  ctaButtonText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  ctaButtonSecondary: {
    backgroundColor: colors.card,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  ctaButtonSecondaryText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '700',
  },
  headerButtonContainer: {
    padding: 6,
  },
  infoSection: {
    marginBottom: 32,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  stepCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  contactSection: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  contactText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
  },
  faqButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  faqButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
});
