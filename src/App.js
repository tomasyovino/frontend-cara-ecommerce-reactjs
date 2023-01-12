import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "./api/request";
import { ScrollToTop } from "./components";
import { HomeScreen, AboutScreen, BlogScreen, CartScreen, ContactScreen, ProductDetailScreen, ShopScreen, RegisterScreen, LoginScreen, ProfileScreen, OrderScreen } from "./screens";
import './styles/App.css';
import './styles/responsive.css'

const App = () => {
  const user = true;
  const [ products, setProducts ] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const res = await publicRequest.get("products")
      setProducts(res.data);
    };
    getProducts();
  }, []);
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeScreen products={products} />} />
        <Route path="/shop" element={<ShopScreen products={products} />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/products/:id" element={<ProductDetailScreen products={products} />} />
        <Route path="/register" element={user ? <Navigate to={"/"} /> :<RegisterScreen />} />
        <Route path="/login" element={user ? <Navigate to={"/"} /> : <LoginScreen />} />
        <Route path="/profile" element={<ProfileScreen products={products} />} />
        <Route path="/orders/:userId" element={<OrderScreen products={products} />} />
        <Route path="/orders/:userId/:orderId" element={<OrderScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
