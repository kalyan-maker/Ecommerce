import React from "react";
import "./DashBoard.css";
import Sidebar from "./Sidebar";
import MetaData from "../Layout/MetaData/MetaData";

function DashBoard() {
  return (
    <div className="dashboard">
      <MetaData title="DashBoard - Admin Panel" />
      <Sidebar />
    </div>
  );
}

export default DashBoard;
