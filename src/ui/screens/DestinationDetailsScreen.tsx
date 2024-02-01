import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import Screen from '../components/Screen';
import { RootStackParamList } from '../../Router';
import useDestinationDetails from '../../core/usecases/useDestinationDetails';

type DestinationDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'DestinationDetails'>;

const DestinationDetailsScreen: React.FC<DestinationDetailsScreenProps> = ({ route, navigation }) => {
  const { destinationId } = route.params;
  const { isLoading, data: destination, refetch: fetchDestination } = useDestinationDetails({ destinationId, delayed: true });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchDestination();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Screen>
      { !isLoading && destination && (
        <View>
          <Text style={{ fontSize: 20 }}>{destination.name}</Text>
          <Text>{JSON.stringify(destination)}</Text>
        </View>
      )}
    </Screen>
  );
};

export default DestinationDetailsScreen;
