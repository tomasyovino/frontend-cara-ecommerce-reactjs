import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen, AboutScreen, BlogScreen, CartScreen, ContactScreen, ProductDetailScreen, ShopScreen, RegisterScreen, LoginScreen } from "./screens";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/product/:id" element={<ProductDetailScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
