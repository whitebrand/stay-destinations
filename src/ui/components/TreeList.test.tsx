import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TreeList, { TreeItemData } from './TreeList';

const ON_OPEN = jest.fn();

const FAKE_TREE_ITEM_DATA: TreeItemData[] = [
  {
    id: '1',
    title: 'Item 1',
    childs: [
      {
        id: '11',
        title: 'Item 1.1',
        childs: [],
      },
      {
        id: '12',
        title: 'Item 1.2',
        childs: [],
      },
    ],
  },
  {
    id: '2',
    title: 'Item 2',
    childs: [],
  },
];

const renderElement = () => {
  const rendered = render(<TreeList items={FAKE_TREE_ITEM_DATA} onOpen={ON_OPEN} />);

  return rendered;
};

describe('<TreeList /> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders expected provided items', () => {
    const { queryByText } = renderElement();
    
    expect(queryByText('Item 1')).not.toBeNull();
    expect(queryByText('Item 2')).not.toBeNull();
  });

  it('calls onOpen when a leaf item is pressed', () => {
    const { queryByText } = renderElement();
    
    fireEvent.press(queryByText('Item 2')!);

    expect(ON_OPEN).toHaveBeenCalledWith('2');
  });

  it('shows collapsed child items when an item with child items is pressed', () => {
    const { queryByText } = renderElement();
    
    fireEvent.press(queryByText('Item 1')!);

    expect(queryByText('Item 1.1')).not.toBeNull();
    expect(queryByText('Item 1.2')).not.toBeNull();
  });

  it('toggles collapse when an item with child items is pressed', () => {
    const { queryByText } = renderElement();
    
    fireEvent.press(queryByText('Item 1')!);

    expect(queryByText('Item 1.1')).not.toBeNull();
    expect(queryByText('Item 1.2')).not.toBeNull();
    expect(ON_OPEN).not.toHaveBeenCalled();
  });
});
