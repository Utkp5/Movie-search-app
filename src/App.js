import Home from "./components/Home/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Singlepage from "./components/Singlepage/Singlepage";

function App() {
  return (
    <div className="App">

      <Router>

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie/:movieid" element={<Singlepage />} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;
