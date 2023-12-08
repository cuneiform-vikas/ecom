import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  selectCart,
} from "../redux/cart/cartSlice";

const CartMenu = () => {
  const items = useSelector(selectCart);
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (total, item) => {
      return { price: total.price + item.price * item.count };
    },
    { price: 0 }
  );

  return (
    <section>
      <h1>Shopping Cart</h1>
      <div className="shopping-bag">
        {items.length > 0 ? (
          items.map((item, i) => (
            <div key={i} className="shopping-item">
              <img src={item.thumbnail} alt={item.title} />
              <div className="desc">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>Price: {item.price}/-</p>
                <p>Quantity: {item.count}</p>
                <button
                  onClick={() => {
                    dispatch(increaseCount(item.id));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch(decreaseCount(item.id));
                  }}
                >
                  -
                </button>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="outline"
              >
                Remove Item
              </button>
            </div>
          ))
        ) : (
          <p>Empty Cart</p>
        )}
      </div>

      <h1>Total Amount : {totalPrice.price}/-</h1>
    </section>
  );
};

export default CartMenu;
