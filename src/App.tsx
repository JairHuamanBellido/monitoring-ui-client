import { BrowserRouter as Router } from "react-router-dom";
import "./sass/App.scss";
import MainRouter from "./Router/MainRouter";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({defaultOptions: {queries:{refetchOnWindowFocus: false}}});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <MainRouter />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
