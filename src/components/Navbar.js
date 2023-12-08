import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectCart } from "../redux/cart/cartSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const items = useSelector(selectCart);

  const navigate = useNavigate();

  const totalPrice = items.reduce(
    (total, item) => {
      return { price: total.price + item.price * item.count };
    },
    { price: 0 }
  );

  return (
    <header>
      <nav>
        <Link to="/" className="logo flex-center">
          Shop
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 -960 960 960"
            width="40"
          >
            <path d="M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Zm-38-240h556-556Zm0 0h556l-24-120H226l-24 120Z" />
          </svg>
        </Link>

        <div style={{ position: "relative" }}>
          <button onClick={() => setOpen(!open)} className="outline">
            Cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
            </svg>
          </button>
          {items.length > 0 && <span className="badge">{items.length}</span>}
        </div>

        {open && (
          <div className="cart-container">
            <div className="cart">
              <button onClick={() => setOpen(!open)} className="outline">
                Close
              </button>
              {items.length > 0 ? (
                items.map((item, i) => (
                  <div key={i} className="cart-item">
                    <img src={item.thumbnail} alt={item.title} />
                    <div>
                      <h1>{item.title}</h1>
                      <p>Price: {item.price}/-</p>
                      <p>Quantity: {item.count}</p>
                    </div>
                    <button className="outline">Remove</button>
                  </div>
                ))
              ) : (
                <p>Empty Cart</p>
              )}
              <div className="total">
                <h1>Total Amount : {totalPrice.price}/-</h1>
                <button
                  className="outline"
                  onClick={() => alert("To Be Made Soon!")}
                >
                  Checkout
                </button>

                <button
                  className="outline"
                  onClick={() => {
                    navigate("/cart");
                    setOpen(!open);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
