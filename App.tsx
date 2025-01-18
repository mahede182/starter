//core
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//defined
import { RootStack } from './src/navigation/RootStack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
