import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import { buyProduct, listProduct } from "../../../services/ProductService";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // esta opción para que veáis cuando cambia algo del array de dependencias del useEffect

  // const [needRefresh, setNeedRefresh] = useState(false);

  // const handleBuyProduct = (id) => {
  //   buyProduct(id)
  //     .then((product) => setNeedRefresh(!needRefresh))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   listProduct()
  //     .then((products) => {
  //       setProducts(products);
  //     })
  //     .catch((err) => console.log(err));
  // }, [needRefresh]);

  const fetchProducts = useCallback(
    () =>
      listProduct()
        .then((products) => {
          setProducts(products);
        })
        .catch((err) => console.log(err)),
    []
  );

  const handleBuyProduct = (id) => {
    buyProduct(id)
      .then((product) => fetchProducts())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="row gy-4 gx-4">
      {products.map((product, i) => {
        return (
          <div key={product._id} className="col-4">
            <div key={i} className="card" style={{ width: "100%" }}>
              <img src={product.photo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                {currentUser.id === product.boughtBy ? (
                  <button className="btn btn-danger" disabled>
                    Comprado
                  </button>
                ) : (
                  <button
                    onClick={() => handleBuyProduct(product._id)}
                    className="btn btn-primary"
                  >
                    Comprar!
                  </button>
                )}
                <button
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="btn btn-primary"
                >
                  Detalle
                </button>

                {/* Podeis utilizar un <Link to=`/product/${product._id}` .../> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
