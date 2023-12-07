import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectCart } from "../redux/cart/cartSlice";
import { selectProducts } from "../redux/products/productsSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const items = useSelector(selectCart);

  const { id } = useParams();
  const num = parseInt(id);

  const products = useSelector(selectProducts);
  const product = products.find((product) => product.id === num);

  return (
    <header>
      <nav>
        <div>
          <Link to="/" className="logo">
            E-com / {product && product.category} / {product && product.title}
          </Link>
        </div>

        <button onClick={() => setOpen(!open)}>
          Cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
          </svg>
          {items.length > 0 && (
            <span className="cart-count">{items.length}</span>
          )}
        </button>

        {open && (
          <div className="cart-container">
            <div className="cart">
              <button onClick={() => setOpen(!open)}>X</button>
              {items.length > 0 ? (
                items.map((item, i) => (
                  <div key={i} className="cart-item">
                    <img src={item.thumbnail} alt={item.title} />
                    <div style={{ textAlign: "right" }}>
                      <h1>{item.title}</h1>
                      <p>{item.price}/-</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Empty Cart</p>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
