import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState } from 'react'

const App = () => {
  const [show, setShow] = useState(false);

  const animatedView = useRef(new Animated.Value(0)).current;

  const showData = () => {
    setShow(!show);
    Animated.timing(animatedView, {
      toValue: show ? 0 : 1,
      duration: 500,
      useNativeDriver: false
    }).start();
  }
  const dropdownHeight = animatedView.interpolate({
    inputRange: [0,1],
    outputRange: [0, 100]
  })
  return (
    <View style={styles.container}>
      <AnimatedAccordion
        show={show}
        setShow={setShow}
      >
        <View>
          <Text>Dummy data</Text>
        </View>
      </AnimatedAccordion>
    </View>
  )
}

const AnimatedAccordion = ({ children, setShow, show }) => {
  // const [show, setShow] = useState(false);

  const animatedView = useRef(new Animated.Value(0)).current;

  const showData = () => {
    setShow(!show);
    Animated.timing(animatedView, {
      toValue: show ? 0 : 1,
      duration: 500,
      useNativeDriver: false
    }).start();
  }
  const dropdownHeight = animatedView.interpolate({
    inputRange: [0,1],
    outputRange: [0, 100]
  });
  return(
    <>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          padding: 10
        }}
        onPress={showData}
      >
        <Text>Title</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          height: dropdownHeight,
          overflow: 'hidden',
        }}>
        <View style={{ backgroundColor: 'gray', height: 100 }}>
          {children}
        </View>
      </Animated.View>
    </>
  )
}
export default App

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})