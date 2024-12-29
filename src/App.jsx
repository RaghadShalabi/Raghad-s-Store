import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Category from "./components/category/Category.jsx";
import Product from "./components/product/Product.jsx";
import ProductDetails from "./components/productDetails/ProductDetails.jsx";
import About from "./components/about/About.jsx";
import Background from "./components/background/Background.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import SomeProduct from "./components/someproduct/SomeProduct.jsx";
import AddProduct from "./components/addproduct/AddProduct.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Background />

      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/category-list" element={<Category />}></Route>
        <Route
          path="/products/category/:categoryName"
          element={<Product />}
        ></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/add" element={<AddProduct />}></Route>
        <Route path="*" element={<h2>page not found</h2>}></Route>
      </Routes>

      <About />
      <SomeProduct />
      <Footer />
    </>
  );
}

export default App;
