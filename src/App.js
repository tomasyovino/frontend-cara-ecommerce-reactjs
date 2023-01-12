import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./components";
import { HomeScreen, AboutScreen, BlogScreen, CartScreen, ContactScreen, ProductDetailScreen, ShopScreen, RegisterScreen, LoginScreen, ProfileScreen, OrderScreen } from "./screens";
import './styles/App.css';
import './styles/responsive.css'

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/shop" element={<ShopScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/products/:id" element={<ProductDetailScreen />} />
        <Route path="/register" element={user ? <Navigate to={"/"} /> :<RegisterScreen />} />
        <Route path="/login" element={user ? <Navigate to={"/"} /> : <LoginScreen />} />
        <Route path="/profile" element={<ProfileScreen/>} />
        <Route path="/orders/:userId" element={<OrderScreen />} />
        <Route path="/orders/:userId/:orderId" element={<OrderScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
