import React, { useMemo } from 'react';
import { Text } from 'react-native';
import Screen from '../components/Screen';
import TreeList, { TreeItemData } from '../components/TreeList';
import useDestinationsList from '../../core/usecases/useDestinationsList';
import { DestinationEntity } from '../../core/entities/Destination';

const DestinationsScreen = () => {
  const { isLoading, data } = useDestinationsList();
  const hasDestinations = data && data.length > 0;

  const mapDestinationEntityToTreeItemData = ({ id, name, isFeatured, childs }: DestinationEntity): TreeItemData => ({
    id,
    title: name,
    childs: childs.map(mapDestinationEntityToTreeItemData),
    isFeatured,
  });

  const destinations = useMemo(() => {
    return data ? data.map(mapDestinationEntityToTreeItemData) : [];
  }, [data]);

  const handleGoToDestination = (id: string) => {

  };

  return (
    <Screen>
      { isLoading ? (
        <Text>Looking for destinations...</Text>
      ) : (
        hasDestinations ? (
          <TreeList items={destinations} onOpen={handleGoToDestination} />
        ) : (
          <Text>There is no destinations available to show you right now. Try again later.</Text>
        )
      )}
    </Screen>
  );
};

export default DestinationsScreen;
