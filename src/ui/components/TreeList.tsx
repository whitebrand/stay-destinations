import { useState } from 'react';
import { View, FlatList, ListRenderItem, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Tag from './Tag';
import { toggleArrayItem } from '../../utils/helpers';
import styles from './TreeList.styles';

export type TreeItemData = {
  id: string;
  title: string;
  childs: TreeItemData[];
  isFeatured: boolean;
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
      <View style={style} testID={`item-${item.id}`}>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            { item.isFeatured && <Tag title="featured" style={{ marginLeft: 4 }} /> }
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
