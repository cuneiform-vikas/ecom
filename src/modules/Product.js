import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectProducts } from "../redux/products/productsSlice";
import { addToCart } from "../redux/cart/cartSlice";

const Product = () => {
  const [count, setCount] = useState(1);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const { id } = useParams();
  const num = parseInt(id);

  const product = products.find((product) => product.id === num);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(addToCart({ ...product, count }));
    navigate("/cart");
  };

  return (
    <section>
      {product ? (
        <div className="product-details">
          <img src={product.thumbnail} alt={product.title} />
          <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price : {product.price}/-</p>
            <p>Category : {product.category}</p>

            <div className="count">
              <button
                onClick={() => setCount(Math.max(count - 1, 1))}
                className="outline"
              >
                -
              </button>

              <h1>{count}</h1>

              <button onClick={() => setCount(count + 1)} className="outline">
                +
              </button>
            </div>

            <button onClick={handleClick} className="outline">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default Product;
