import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Router from './Router';
import GlobalStyles from './styles/GlobalStyles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

function App(): ReactNode {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
