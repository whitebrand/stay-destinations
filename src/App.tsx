import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DestinationsScreen from './ui/screens/DestinationsScreen';
import Router from './Router';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
