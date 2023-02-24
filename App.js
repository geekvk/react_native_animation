import { StyleSheet, Text, View, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'

const App = () => {
  // useRef returns a mutable ref object whose current property is initialized to the passed argument
  // The returned object will persists for the full life time of the component
  let animatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 150;
  const Header_Min_Height = 50;

  const animateHeaderBGColor = animatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height-Header_Min_Height],
    outputRange: ["blue", "red"],
    extrapolate: 'clamp'
  });
  const animatedTextColor = animatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height-Header_Min_Height],
    outputRange: ["white", "black"],
    extrapolate: 'clamp'
  })
  const animatedHeaderHeight = animatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp'
  })
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, {
        height: animatedHeaderHeight,
        backgroundColor: animateHeaderBGColor
      }]}>
        <Animated.Text style={[styles.headerText, { color: animatedTextColor }]}>Header container</Animated.Text>
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedHeaderValue}}}],
          {useNativeDriver: false}
        )}
      >
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
        <TestText/>
      </ScrollView>
    </View>
  )
}

export default App

const TestText = () => (
  <Text style={styles.text}>Text</Text>
)
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  text:{
    fontSize: 50,
    fontWeight: '600'
  },
  header:{
    width: '100%',
    alignItems: 'center'
  },
  headerText:{
    fontSize: 30,
  }
})