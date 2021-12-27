import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Order.css";

const OrderSuccess = () => {
  return (
    <div className="ordersuccess">
      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
