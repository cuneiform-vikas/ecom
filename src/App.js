import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
// import { routes } from "./routes";
import "./utils/App.css";
import Products from "./modules/Products";
import Product from "./modules/Product";
import CartMenu from "./modules/CartMenu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="logo flex-center">404 Error</h1>
    </>
  );
};

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={routes} /> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="cart" element={<CartMenu />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
