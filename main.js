import Expo from 'expo'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Reactotron from 'reactotron-react-native'

Reactotron.configure().useReactNative()

class App extends React.Component {
  componentDidMount () {
    Reactotron.connect()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Hello Reactotron!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }
})

Expo.registerRootComponent(App)
