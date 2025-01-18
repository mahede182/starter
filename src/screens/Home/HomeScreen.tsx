import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const HomeScreen = (props: Props) => {
    console.log("hello world")
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
})