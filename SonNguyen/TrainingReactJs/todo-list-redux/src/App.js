import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/view/list/list";
import { Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} exact />
        <Route component={Error} />
      </Routes>
    </div>
  );
}

export default App;
