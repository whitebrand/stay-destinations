import { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DestinationsScreen from './ui/screens/DestinationsScreen';
import DestinationDetailsScreen from './ui/screens/DestinationDetailsScreen';

export type RootStackParamList = {
  Destinations: undefined;
  DestinationDetails: { destinationId: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Router: React.FC<PropsWithChildren> = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Destinations" screenOptions={{
        headerBackTitleVisible: false,
      }}>
        <RootStack.Screen name="Destinations" component={DestinationsScreen} />
        <RootStack.Screen name="DestinationDetails" component={DestinationDetailsScreen} options={{ title: 'Details' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
