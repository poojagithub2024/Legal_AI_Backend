import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Processing from "./pages/Processing";
import Dashboard from "./pages/Dashboard";
import Simulator from "./pages/Simulator";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route
  path="/processing"
  element={<Processing />}
/>
        <Route
  path="/dashboard"
  element={<Dashboard />}
/>
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;