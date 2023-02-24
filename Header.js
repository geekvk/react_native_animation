import { Animated, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import { Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

const UPPER_HEADER = 40;
const LOWER_HEADER = 96;

const Header = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

  const searchInputAnimation = {
    transform:[
        {
            scaleX: animatedValue.interpolate({
                inputRange: [0,50],
                outputRange: [1,0],
                extrapolate: 'clamp'
            })
        },
        {
            translateX: animatedValue.interpolate({
                inputRange: [0,25],
                outputRange: [0, -100],
                extrapolate: 'clamp'
            })
        }
    ],
    opacity: animatedValue.interpolate({
        inputRange: [0,25],
        outputRange: [1,0],
        extrapolate: 'clamp'
    })
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>

      <SafeAreaView>
        <View style={styles.uppderHeaderPlaceholder}/>
      </SafeAreaView>

      <SafeAreaView style={styles.header}>
            <View style={styles.uppderHeader}>
                <View style={styles.searchContainer}>
                    <FontAwesome name="search" style={{ width: 30, height: 30, color: 'white'}}/>
                    <AnimatedTextInput placeholder='search' style={[{
                        position: 'absolute',
                        width: '100%',
                        backgroundColor: 'white'
                    }, searchInputAnimation]}/>
                </View>
                <View>
                    <FontAwesome name="bell-o" style={{ width: 30, height: 30, color: 'white'}}/>
                    <Image 
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50
                        }}
                        source={{uri: 'https://hips.hearstapps.com/hmg-prod/images/screen-shot-2022-10-28-at-9-51-32-am-1666965104.png'}}/>
                </View>
            </View>
            <View style={styles.lowerHeader}>
                <View style={styles.feature}>
                    <Image source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/5039/5039041.png'
                    }}
                    style={{
                        width: 30,
                        height: 30
                    }}/>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600'
                    }}>Feature</Text>
                </View>
                <View style={styles.feature}>
                    <Image source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/5039/5039041.png'
                    }}
                    style={{
                        width: 30,
                        height: 30
                    }}/>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600'
                    }}>Feature</Text>
                </View>
                <View style={styles.feature}>
                    <Image source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/5039/5039041.png'
                    }}
                    style={{
                        width: 30,
                        height: 30
                    }}/>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600'
                    }}>Feature</Text>
                </View>
                <View style={styles.feature}>
                    <Image source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/5039/5039041.png'
                    }}
                    style={{
                        width: 30,
                        height: 30,
                        color: 'white'
                    }}/>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600'
                    }}>Feature</Text>
                </View>
            </View>
      </SafeAreaView>

      <ScrollView onScroll={e => {
        const offsetY = e.nativeEvent.contentOffset.y;
        animatedValue.setValue(offsetY);
      }}
      scrollEventThrottle= {16}
      >
        <View style={styles.paddingForHeader}/>
        <View style={styles.scrollViewContent}/>
      </ScrollView>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        position: 'absolute',
        width: '100%',
        height: 136,
        backgroundColor: 'red'
    },
    uppderHeader:{
        height: UPPER_HEADER,
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    paddingForHeader:{
        height: LOWER_HEADER,

    },
    lowerHeader:{
        height: LOWER_HEADER,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    scrollViewContent:{
        height: WINDOW_HEIGHT*2,
        backgroundColor: 'green'
    },
    uppderHeaderPlaceholder:{
        height: UPPER_HEADER
    },
    searchContainer:{
        flex: 1,
        justifyContent: 'center',
        
    },
    feature:{
        marginTop: 20,
        alignItems: 'center'
    }
})