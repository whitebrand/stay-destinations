import React from 'react';
import { View, FlatList, ListRenderItem, Text, TouchableOpacity } from 'react-native';
import Screen from '../components/Screen';
import useDestinationsList from '../../core/usecases/useDestinationsList';
import { DestinationEntity } from '../../core/entities/Destination';

const DestinationsListItem: ListRenderItem<DestinationEntity> = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={{ borderWidth: 1, borderRadius: 6, margin: 8, padding: 16, borderColor: '#DDD' }}>
        <Text style={{ fontSize: 16 }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const DestinationsList = () => {
  const { isLoading, data } = useDestinationsList();

  return (
    <FlatList style={{}} data={data} renderItem={DestinationsListItem} />
  );
};

const DestinationsScreen = () => {

  return (
    <Screen>
      <DestinationsList />
    </Screen>
  );
};

export default DestinationsScreen;
