
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Pressable, Platform, Linking } from 'react-native';
import { Stack } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How long does the fitting process take?',
    answer: 'The initial consultation and fitting takes about 30-45 minutes. After we create your custom fangs, a second appointment of 15-20 minutes is needed for final fitting and adjustments.',
  },
  {
    question: 'Are the fangs comfortable to wear?',
    answer: 'Yes! Our fangs are custom-fitted to your teeth using medical-grade materials. Most customers report they forget they&apos;re wearing them after a few hours. We ensure proper fit and comfort during your fitting appointment.',
  },
  {
    question: 'Can I eat and drink with them on?',
    answer: 'We recommend removing your fangs before eating. However, you can drink most beverages while wearing them. Avoid very hot drinks as they may affect the fit.',
  },
  {
    question: 'How do I care for my fangs?',
    answer: 'Clean your fangs daily with a soft toothbrush and mild soap. Store them in the provided case when not wearing them. Avoid exposing them to extreme heat or harsh chemicals.',
  },
  {
    question: 'How long do they last?',
    answer: 'With proper care, your custom fangs can last 2-5 years. We offer a lifetime warranty against manufacturing defects and free adjustments for the first year.',
  },
  {
    question: 'What if they don&apos;t fit properly?',
    answer: 'We guarantee a perfect fit! If you experience any discomfort or fit issues, contact us immediately. We&apos;ll schedule a free adjustment appointment within 48 hours.',
  },
  {
    question: 'Can I customize the color and style?',
    answer: 'Absolutely! We offer various colors, lengths, and styles. During your consultation, we&apos;ll discuss all customization options to create your perfect look.',
  },
  {
    question: 'Are they safe for my teeth?',
    answer: 'Yes, our fangs are made from dental-grade materials that are completely safe. They don&apos;t damage your natural teeth and can be removed at any time.',
  },
  {
    question: 'What&apos;s your return policy?',
    answer: 'Due to the custom nature of our products, we don&apos;t offer returns. However, we guarantee satisfaction and will work with you to ensure you&apos;re happy with your fangs.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we only serve local customers who can visit our studio for fittings. Custom fangs require in-person measurements for the best results.',
  },
];

function FAQAccordion({ item }: { item: FAQItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.faqItem}>
      <Pressable
        style={styles.faqQuestion}
        onPress={() => setExpanded(!expanded)}
      >
        <Text style={styles.questionText}>{item.question}</Text>
        <IconSymbol
          name={expanded ? 'chevron.up' : 'chevron.down'}
          color={colors.primary}
          size={20}
        />
      </Pressable>
      {expanded && (
        <View style={styles.faqAnswer}>
          <Text style={styles.answerText}>{item.answer}</Text>
        </View>
      )}
    </View>
  );
}

export default function FAQScreen() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:info@nightmarefangs.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+15551234567');
  };

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: 'FAQ & Contact',
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
          <Text style={styles.title}>Frequently Asked Questions</Text>
          <Text style={styles.subtitle}>
            Find answers to common questions about our custom fang caps.
          </Text>

          <View style={styles.faqList}>
            {faqs.map((faq, index) => (
              <FAQAccordion key={index} item={faq} />
            ))}
          </View>

          <View style={styles.contactSection}>
            <Text style={styles.contactTitle}>Still Have Questions?</Text>
            <Text style={styles.contactSubtitle}>
              We&apos;re here to help! Reach out to us anytime.
            </Text>

            <Pressable style={styles.contactButton} onPress={handleEmailPress}>
              <IconSymbol name="envelope.fill" color={colors.text} size={24} />
              <View style={styles.contactButtonContent}>
                <Text style={styles.contactButtonLabel}>Email Us</Text>
                <Text style={styles.contactButtonValue}>info@nightmarefangs.com</Text>
              </View>
            </Pressable>

            <Pressable style={styles.contactButton} onPress={handlePhonePress}>
              <IconSymbol name="phone.fill" color={colors.text} size={24} />
              <View style={styles.contactButtonContent}>
                <Text style={styles.contactButtonLabel}>Call Us</Text>
                <Text style={styles.contactButtonValue}>(555) 123-4567</Text>
              </View>
            </Pressable>

            <View style={styles.hoursBox}>
              <Text style={styles.hoursTitle}>Business Hours</Text>
              <Text style={styles.hoursText}>Monday - Friday: 10am - 7pm</Text>
              <Text style={styles.hoursText}>Saturday: 11am - 6pm</Text>
              <Text style={styles.hoursText}>Sunday: Closed</Text>
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
  faqList: {
    marginBottom: 32,
  },
  faqItem: {
    backgroundColor: colors.card,
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
    marginRight: 12,
  },
  faqAnswer: {
    padding: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: colors.background,
  },
  answerText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  contactSection: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 8,
  },
  contactSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 20,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    gap: 16,
  },
  contactButtonContent: {
    flex: 1,
  },
  contactButtonLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  contactButtonValue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  hoursBox: {
    marginTop: 20,
    padding: 16,
    backgroundColor: colors.background,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.accent,
  },
  hoursTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.accent,
    marginBottom: 12,
  },
  hoursText: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 6,
  },
});
