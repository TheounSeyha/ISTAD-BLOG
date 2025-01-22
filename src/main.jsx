import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./Components/RootLayout.jsx";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Account from "./pages/Account.jsx";
import CardProduct from "./Components/Card.jsx"; 
import DetailedCardProduct from "./pages/PageDetail.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />

          {/* This is for the list of Card products */}
          <Route path="/blog" element={<CardProduct />} />

          {/* This is for showing detailed view of a single blog post */}
          <Route path="/blog/:id" element={<DetailedCardProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
