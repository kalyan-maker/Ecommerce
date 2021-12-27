import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">
        <h1>ECOMMERCE</h1>
      </Link>
      <Link to="/admin/dashboard">
        <p>Dashboard</p>
      </Link>
      <Link to="/admin/products">
        <p>All products</p>
      </Link>
      <Link to="/admin/product">
        <p>Create product</p>
      </Link>
      <Link to="/admin/orders">
        <p>Orders</p>
      </Link>
      <Link to="/admin/users">
        <p>Users</p>
      </Link>
      <Link to="/admin/reviews">
        <p>Reviews</p>
      </Link>
    </div>
  );
}
