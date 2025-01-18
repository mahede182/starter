import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home';
import { ProfileScreen } from '../screens/Profile';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}