import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import FAQ from "./components/FAQ"
import { useEffect, useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Classes from "./components/Classes";
import Landingpage from "./pages/Landingpage";
import Shop from "./pages/Shop";
import AllProducts from "./components/AllProducts";
import Details from "./components/Details";
import WishList from "./components/WishList";
import Cart from "./components/Cart";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ForgotPassword from "./components/ForgotPassword";
import CreatePassword from "./components/CreatePassword";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";

  return (
    <div className=" flex flex-col">
      {!isDashboardPage && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
        <Route path="/contact" element={<Contact isLoggedIn={isLoggedIn} />} />
        <Route path="/shop" element={<Shop isLoggedIn={isLoggedIn} />} />
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/details' element={<Details />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/cart' element={<Cart />} />

        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/forgotPassword"
          element={<ForgotPassword />}
        />
        <Route
          path="/createPassword"
          element={<CreatePassword />}
        />



        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;