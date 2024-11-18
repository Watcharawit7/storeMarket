import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
function App() {
  return (
    <Router>
      <Routes>
        {/* Route สำหรับหน้า Home */}
        <Route path="/" element={<Home />} />

        {/* Route สำหรับหน้า Detail */}
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
