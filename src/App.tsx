import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <h1 className="text-red-400">Hello</h1>
  </QueryClientProvider>
);

export default App;
