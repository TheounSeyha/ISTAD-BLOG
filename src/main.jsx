import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./Components/RootLayout.jsx";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Account from "./pages/Account.jsx";
import LoginForm from "./pages/Login.jsx";
import RegisterForm from "./pages/RegisterForm.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path= "/register" element={<RegisterForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
