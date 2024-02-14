import {BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import "./app.scss"

import Footer from "./components/footer/Footer";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>

<Route path="/" element={<Home/>} />

<Route path="/product/:id" element={<Product />} />
<Route path="/products/:id" element={<Products/>} />

   </Routes>

   <Footer />
   </BrowserRouter>
  );
}

export default App;
