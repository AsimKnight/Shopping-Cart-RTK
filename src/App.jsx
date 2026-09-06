import "./app.css";
// import tailwindcss from "@tailwindcss/vite";
import ShowProdcts from "../COMPONENTS/ShowProdcts.jsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Layout from "../PAGES/Layout.jsx";
import CartPage from "../PAGES/CartPage.jsx";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ShowProdcts />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
