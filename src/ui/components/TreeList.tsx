import { useState } from 'react';
import { View, FlatList, ListRenderItem, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { toggleArrayItem } from '../../utils/helpers';

export type TreeItemData = {
  id: string;
  title: string;
  childs: TreeItemData[];
};

type TreeListProps = {
  items: TreeItemData[];
  style?: ViewStyle;
  onOpen: (id: TreeItemData['id']) => void;
};

const TreeList: React.FC<TreeListProps> = ({ items, style, onOpen }) => {
  const [openedItems, setOpenedItems] = useState<TreeItemData['id'][]>([]);

  const toggleCollapse = (id: TreeItemData['id']) => {
    setOpenedItems(prev => toggleArrayItem(prev, id));
  };

  const TreeListItem: ListRenderItem<TreeItemData> = ({ item }) => {
    const hasChildItems = item.childs.length > 0;
    const isCollapsed = !openedItems.includes(item.id);

    const handlePress = () => {
      if (hasChildItems) {
        toggleCollapse(item.id);
      } else {
        onOpen(item.id);
      }
    };
  
    return (
      <View style={style}>
        <TouchableOpacity onPress={handlePress}>
          <View style={{ borderWidth: 1, borderRadius: 6, margin: 8, padding: 16, borderColor: '#DDD' }}>
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
          </View>
        </TouchableOpacity>
        { hasChildItems && !isCollapsed && (
          <TreeList style={{ marginLeft: 20 }} items={item.childs} onOpen={onOpen} />
        )}
      </View>
    );
  };

  return (
    <FlatList style={{}} data={items} renderItem={TreeListItem} />
  );
};

export default TreeList;
