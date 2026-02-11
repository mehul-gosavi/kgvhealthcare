import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Header from "./components/header";
import Footer from "./components/footer";
import ProductDetail from "./components/ProductDetail";
import ScrollToTop from "./components/ScrollToTop";

import OurTeam from "./pages/OurTeam";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 THIS FIXES SCROLL ISSUE */}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        

        <Route path="/our-team" element={<OurTeam />} />


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
