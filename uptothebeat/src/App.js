import '../src/assets/output.css';
import '../src/assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Index from '../src/router/index';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Index />
      </div>
    </QueryClientProvider>
  );
}

export default App;
