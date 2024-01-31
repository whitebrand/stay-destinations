import { Text } from 'react-native';
import { render, screen } from '@testing-library/react-native';
import Screen from './Screen';

const renderElement = () => {
  const rendered = render(<Screen><Text>children element</Text></Screen>);

  return rendered;
};

describe('<Screen /> component', () => {
  it('renders children element', () => {
    renderElement();
  
    expect(screen.queryByText('children element')).not.toBeNull();
  });
});
