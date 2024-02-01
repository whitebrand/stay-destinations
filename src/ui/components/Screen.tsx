import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';

type ScreenProps = PropsWithChildren<{}>;

const Screen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;
