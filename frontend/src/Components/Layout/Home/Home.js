import React, { Fragment, useEffect } from "react";
import "./Home.css";
import Product from "./ProductCard";
import MetaData from "../MetaData/MetaData";
import { getProduct, clearErrors } from "../../../actions/ProductAction";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";

import { useSelector, useDispatch } from "react-redux";

function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Home" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
          </div>
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
