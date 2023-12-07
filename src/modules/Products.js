import React, { useEffect } from "react";
import { useGetProductsQuery } from "../redux/products/productsApi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, selectProducts } from "../redux/products/productsSlice";

const Products = () => {
  const { data } = useGetProductsQuery();

  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addProducts(data));
    }
  }, [data, dispatch]);

  return (
    <section>
      <h1>Products</h1>
      <div className="products-list">
        {products.map((product, i) => (
          <Link key={i} to={`/product/${product.id}`}>
            <div className="items">
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title} </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
