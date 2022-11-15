import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Updates from "./components/updates/Updates";
import DemoPage from "./pages/DemoPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>

      <Toaster position="top-right" />
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login"  element={<Login />}/>
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/update" element={<Updates />} />
      </Routes>
    </>
  );
}

export default App;
