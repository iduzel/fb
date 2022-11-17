import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Modal from "./components/modals/Modal";
import Updates from "./components/updates/Updates";
import DemoPage from "./pages/DemoPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { open, data } = useSelector((state) => state.modal);
  return (
    <>
      <Toaster position="top-right" />
      {
        open && <Modal name={open} data={data} />
      }
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/update" element={<Updates />} />
      </Routes>
    </>
  );
}

export default App;
