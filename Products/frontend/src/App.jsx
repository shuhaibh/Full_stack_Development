import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./components/Products";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <nav className="bg-gray-800 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex space-x-6 py-4">
              <li>
                <Link to="/" className="text-white hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white hover:text-gray-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/addproducts" className="text-white hover:text-gray-300">
                  Add Product
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/addproducts' element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;