import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DestinationsScreen from './ui/screens/DestinationsScreen';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DestinationsScreen />
    </QueryClientProvider>
  );
};

export default App;
