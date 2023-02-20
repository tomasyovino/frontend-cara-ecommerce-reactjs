import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { publicRequest } from "./api/request";
import { ScrollToTop } from "./components";
import { HomeScreen, AboutScreen, BlogScreen, CartScreen, ContactScreen, ProductDetailScreen, ShopScreen, RegisterScreen, LoginScreen, ProfileScreen, OrderScreen, NotFoundPage } from "./screens";
import { Header, Footer } from "./components";
import './styles/App.css';
import './styles/responsive.css';
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [ products, setProducts ] = useState();
  const [ loader, setLoader ] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("products")
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      };
    };
    getProducts();
  }, []);
  
  return (
    <BrowserRouter>
      <ToastContainer />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen products={products} loader={loader} />} />
        <Route path="/shop" element={<ShopScreen products={products} loader={loader} />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={!user ? <Navigate to={"/login"} /> : <ContactScreen />} />
        <Route path="/cart" element={!user ? <Navigate to={"/login"} /> : <CartScreen />} />
        <Route path="/products/:id" element={!user ? <Navigate to={"/login"} /> : <ProductDetailScreen products={products} loader={loader} />} />
        <Route path="/register" element={user ? <Navigate to={"/"} /> :<RegisterScreen />} />
        <Route path="/login" element={user ? <Navigate to={"/"} /> : <LoginScreen />} />
        <Route path="/profile" element={!user ? <Navigate to={"/login"} /> : <ProfileScreen products={products} loader={loader} />} />
        <Route exact path="/orders/:userId" element={!user ? <Navigate to={"/login"} /> : <OrderScreen products={products} loader={loader} />} />
        <Route exact path="/orders/:userId/:orderId" element={!user ? <Navigate to={"/login"} /> : <OrderScreen products={products} loader={loader} />} />
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
