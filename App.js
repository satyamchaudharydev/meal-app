import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack" 
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
        <StatusBar style="light" />
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Categories'>
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
                <Stack.Screen name="DetailScreen" component={DetailScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
