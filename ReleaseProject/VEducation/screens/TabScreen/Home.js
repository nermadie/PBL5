import React, { useState, useRef, useEffect, useContext } from 'react';
import { StyleSheet, Text, Image, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AchievementSection from './HomeComponents/AchivementSection';
import Footer from './HomeComponents/Footer';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import NewsletterSignup from './HomeComponents/NewsletterSignup';
import Main from './HomeComponents/Main';
import { StatusBar } from 'expo-status-bar';

export default function Home() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingWrapper>
        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}
            scrollEventThrottle={16}
          >
            <Main />
            <AchievementSection />
            <NewsletterSignup />
            <Footer
              logo="https://moment-learning.vercel.app/static/media/logo.c91ff9dc94173d493508.png"
              latestNews={[
                {
                  title: 'Top 10 books you Must read in 2023',
                  date: 'July 15, 2023'
                },
                {
                  title: 'How to Improve Your Communication Skill',
                  date: 'July 1, 2023'
                }
              ]}
              courseList={[
                'Advance Javascript – ES6',
                'WordPress for Intermediate',
                'iOS App Development',
                'Wbsite Development',
                'Android App Development'
              ]}
              newsletter="Subscribe to us to always stay in touch with us and get the latest news."
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});