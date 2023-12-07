import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProducts } from "../redux/products/productsSlice";
import { addToCart } from "../redux/cart/cartSlice";

const Product = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const { id } = useParams();
  const num = parseInt(id);

  const product = products.find((product) => product.id === num);

  const handleClick = () => {
    dispatch(addToCart(product));
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

            <button onClick={handleClick}>Add to Cart</button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default Product;
