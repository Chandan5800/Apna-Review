import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Login from "./components/Login";
import About from "./components/About";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { baseTheme } from "./assets/global/Theme-variable";
import Themeroutes from "./routes/Router";
import Header from "./components/Header";

function App() {
  const routing = useRoutes(Themeroutes);
  const theme = baseTheme;
  return (
    <>
      <ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ThemeProvider theme={theme}>{routing}</ThemeProvider>
    </>
  );
}

export default App;
