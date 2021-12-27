import React, { Fragment, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import MetaData from "../../Layout/MetaData/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { clearErrors, myOrders } from "../../../actions/OrderAction";
import LaunchIcon from "@material-ui/icons/Launch";
// import Loader from "../../Layout/Loader/Loader";
import { DataGrid } from "@material-ui/data-grid";
import "./MyOrder.css";

const MyOrder = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 300,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 300,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 300,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 300,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.getValue(params.id, "id")}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      <MetaData title={`${user.name} - Orders`} />

      <div className="myOrdersPage">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          className="myOrdersTable"
          autoHeight
        />

        <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
      </div>
    </Fragment>
  );
};

export default MyOrder;
