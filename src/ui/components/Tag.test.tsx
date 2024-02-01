import React from 'react';
import { render } from '@testing-library/react-native';
import Tag, { TagProps } from './Tag';

const renderElement = (props: Partial<TagProps>) => {
  const rendered = render(<Tag title="The tag" {...props} />);

  return rendered;
};

describe('Tag Component', () => {
  it('renders provided title', () => {
    const { queryByText } = renderElement({ title: 'featured' });
    expect(queryByText('featured')).not.toBeNull();
  });

  it('applies custom style provided', () => {
    const customStyle = { backgroundColor: 'red' };
    const { queryByTestId } = renderElement({ style: customStyle });
    const container = queryByTestId('tag');
    
    expect(container?.props.style.backgroundColor).toEqual('red');
  });
});
