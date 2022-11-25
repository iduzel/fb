import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {Helmet} from "react-helmet";

import "./App.css";
import Modal from "./components/modals/Modal";
import Updates from "./components/updates/Updates";
import DemoPage from "./pages/DemoPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { firebaseConfig } from './firebase';
import TailwindDemo from "./pages/TailwindDemo";
import Header from "./components/header/Header";

function App() {
  const { open, data } = useSelector((state) => state.modal);
  return (
    <>
      <Toaster position="top-right" />
      {
        open && <Modal name={open} data={data} />
      }
      <Helmet>
        <meta charSet="utf-8" />
        <title>ID</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tail" element={<TailwindDemo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/update" element={<Updates />} />
      </Routes>
    </>
  );
}

export default App;
