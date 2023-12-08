import { Outlet, createBrowserRouter } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartMenu from "./modules/CartMenu";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="logo flex-center">404 Error</h1>
    </>
  );
};

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <CartMenu />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
