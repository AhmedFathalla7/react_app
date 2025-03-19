import { useState ,lazy ,Suspense} from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
// import ProductList from "./pages/ProductList";
// import Cart from "./pages/cart";
// import Register from "./pages/register";
// import ProductDetails  from './pages/ProductDetails';
// import NotFound from "./pages/NotFound";
console.log("App.jsx");
const ProductList = lazy(() => import("./pages/ProductList"));
const Cart = lazy(() => import("./pages/cart"));
const Register = lazy(() => import("./pages/register"));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const NotFound = lazy(() => import("./pages/NotFound"));

import Loader from "./components/loader";

import HeaderLayout from "./components/headerlayout";


import LanguageContext from "./context/language";
import { useEffect } from 'react';

function App() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <>
      <BrowserRouter>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<HeaderLayout />}>
              <Route index element={<ProductList />} />
              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        </LanguageContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
