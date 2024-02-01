import React, { useState } from 'react';
import { View, FlatList, ListRenderItem, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Screen from '../components/Screen';
import useDestinationsList from '../../core/usecases/useDestinationsList';
import { DestinationEntity, DestinationId } from '../../core/entities/Destination';
import { toggleArrayItem } from '../../utils/helpers';

type DestinationsListProps = {
  items: DestinationEntity[];
  style?: ViewStyle;
};

const DestinationsList: React.FC<DestinationsListProps> = ({ items, style }) => {
  const [openedItems, setOpenedItems] = useState<DestinationId[]>([]);

  const toggleCollapse = (id: DestinationId) => {
    setOpenedItems(prev => toggleArrayItem(prev, id));
  };

  const handleOpen = (id: DestinationId) => {

  };

  const DestinationsListItem: ListRenderItem<DestinationEntity> = ({ item }) => {
    const hasChildItems = item.hasChildren && item.childs.length > 0;
    const isCollapsed = !openedItems.includes(item.id);

    const handlePress = () => {
      if (hasChildItems) {
        toggleCollapse(item.id);
      } else {
        handleOpen(item.id);
      }
    };
  
    return (
      <View style={style}>
        <TouchableOpacity onPress={handlePress}>
          <View style={{ borderWidth: 1, borderRadius: 6, margin: 8, padding: 16, borderColor: '#DDD' }}>
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
          </View>
        </TouchableOpacity>
        { hasChildItems && !isCollapsed && (
          <DestinationsList style={{ marginLeft: 20 }} items={item.childs} />
        )}
      </View>
    );
  };

  return (
    <FlatList style={{}} data={items} renderItem={DestinationsListItem} />
  );
};

const DestinationsScreen = () => {
  const { isLoading, data } = useDestinationsList();

  return (
    <Screen>
      { isLoading ? (
        <Text>Looking for destinations...</Text>
      ) : (
        data && data.length > 0 ? (
          <DestinationsList items={data} />
        ) : (
          <Text>There is no destinations available to show you right now. Try again later.</Text>
        )
      )}
    </Screen>
  );
};

export default DestinationsScreen;
