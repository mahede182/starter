import React from 'react'
import { StyleSheet, Text, View,Button, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../../features/counter/counterSlice'
import { useGetColorsQuery } from '../../api/colorApi'

type Props = {}

const HomeScreen = (props: Props) => {
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  const {data:colors,error,isFetching} = useGetColorsQuery()
  if (isFetching) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (error) {
    return <Text>Error while loading data</Text>;
  }

  if (!colors) {
    return <Text>No data</Text>;
  }

  console.log(colors,"colors")
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      {colors.data.map(({ id, name, color }) => (
        <View key={id}>
          <Text>{name}</Text>
          <Text>{color}</Text>
        </View>
      ))}
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 80
    }
})