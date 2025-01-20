import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./Components/Layout/RootLayout.jsx";
import "./index.css";
import App from "./App.jsx";
import About from "./About.jsx";
import Account from "./Account.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/account" element={<Account/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
