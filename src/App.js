import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import { Providers } from "./context/databaseContex";
import Homes from "./pages/Homes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loker from "./pages/Loker";
import Riset from "./pages/Riset";
import OverviewLocker from "./pages/OverviewLoker";
const App = () => {
  return (
    <div>
      <Providers>
        <Router>
          <Routes>
            <Route path="/" element={<Homes />} />
            <Route path="/loker" element={<Loker />} />
            <Route path="riset" element={<Riset />} />
            <Route path="overview" element={<OverviewLocker />} />
          </Routes>
        </Router>
      </Providers>
    </div>
  );
};

export default App;
