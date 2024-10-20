import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddJob from "./components/AddJob";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addjob" element={<AddJob />} />
      </Routes>
    </Router>
  );
}
export default App;
