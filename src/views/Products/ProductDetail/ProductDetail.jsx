import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productDetail } from "../../../services/ProductService";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    productDetail(id)
      .then((product) => setProduct(product))
      .catch((err) => console.log(err));
  }, []);

  if (!product) {
    return <p> ... fetching product</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
    </div>
  );
};

export default ProductDetail;
