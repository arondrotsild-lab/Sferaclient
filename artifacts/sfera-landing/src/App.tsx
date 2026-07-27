import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}>
        <Switch>
          <Route path="/" component={Home} />
          {/* Fallback to Home for now to avoid not found issues during navigation */}
          <Route component={Home} />
        </Switch>
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
