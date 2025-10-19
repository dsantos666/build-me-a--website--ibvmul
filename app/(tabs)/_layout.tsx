
import React from 'react';
import { Platform } from 'react-native';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  const tabs: TabBarItem[] = [
    {
      name: '(home)',
      route: '/(tabs)/(home)/',
      icon: 'house.fill',
      label: 'Home',
    },
    {
      name: 'gallery',
      route: '/(tabs)/gallery',
      icon: 'square.grid.3x3',
      label: 'Gallery',
    },
    {
      name: 'appointment',
      route: '/(tabs)/appointment',
      icon: 'calendar',
      label: 'Book',
    },
    {
      name: 'faq',
      route: '/(tabs)/faq',
      icon: 'questionmark.circle',
      label: 'FAQ',
    },
  ];

  if (Platform.OS === 'ios') {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name="(home)">
          <Icon sf="house.fill" drawable="ic_home" />
          <Label>Home</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="gallery">
          <Icon sf="square.grid.3x3" drawable="ic_gallery" />
          <Label>Gallery</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="appointment">
          <Icon sf="calendar" drawable="ic_calendar" />
          <Label>Book</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="faq">
          <Icon sf="questionmark.circle" drawable="ic_faq" />
          <Label>FAQ</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen name="(home)" />
        <Stack.Screen name="gallery" />
        <Stack.Screen name="appointment" />
        <Stack.Screen name="faq" />
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </>
  );
}
