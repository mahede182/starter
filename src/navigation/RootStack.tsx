//core
import { createStackNavigator } from '@react-navigation/stack';
//defined
import { HomeScreen } from '../screens/Home';
import { ProfileScreen } from '../screens/Profile';
import { TabNavigation } from './Tab.navigator';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Home" component={TabNavigation} />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
}