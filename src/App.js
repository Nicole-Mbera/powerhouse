import './App.css';
import{ BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from "./routes"
function App() {
  return (
    <Router>
      <Routes></Routes>
    </Router>
  );
}
export default App;