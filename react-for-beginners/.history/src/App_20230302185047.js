import Home from "./routes/Home";
import Detail from "./routes/Detail"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return <Router>
      <Routes>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </Router>;
}


export default App;
