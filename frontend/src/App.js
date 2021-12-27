import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";
import Home from "./Components/Layout/Home/Home";
import Error from "./Components/Layout/Error/Error";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebFont from "webfontloader";
import ProductDetails from "./Components/Product/ProductDetails/ProductDetails";
import Products from "./Components/Product/Products/Products";
import Search from "./Components/Product/Search/Search";
import LoginSignup from "./Components/User/Login/LoginSignup";
import store from "./Store";
import { useSelector } from "react-redux";
import { loadUser } from "./actions/UserActions";
import UserOptions from "./Components/Layout/UserOption/UserOption";
import Profile from "./Components/User/Profile/Profile";
import ProtectedRoute from "./Components/Route/ProtectedRoute";
import UpdateProfile from "./Components/User/Update/UpdateProfile";
import UpdatePassword from "./Components/User/UpdatePassword/UpdatePassword";
import ForgotPassword from "./Components/User/Forget/ForgotPassword";
import ResetPassword from "./Components/User/Reset/ResetPassword";
import Cart from "./Components/Cart/Cart";
import Shipping from "./Components/Cart/Shipping/Shipping";
import ConfirmOrder from "./Components/Cart/ConfirmOrder/ConfirmOrder";
import Payment from "./Components/Cart/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./Components/Cart/OrderSuccess/OrderSuccess";
import MyOrder from "./Components/Orders/MyOrder/MyOrder";
import OrderDetail from "./Components/Orders/OrderDetail/OrderDetail";
import DashBoard from "./Components/Admin/DashBoard";
import ProductList from "./Components/Admin/ProductList";
import NewProduct from "./Components/Admin/NewProduct";
import UpdateProduct from "./Components/Admin/UpdateProduct";
import OrderList from "./Components/Admin/OrderList";
import ProductReview from "./Components/Admin/ProductReview";
import UpdateUser from "./Components/Admin/UpdateUser";
import UserList from "./Components/Admin/UserList";
import ProcessOrder from "./Components/Admin/ProcessOrder";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />

        {isAuthenticated && <UserOptions user={user} />}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:keyword" component={Products} />
          <Route exact path="/search" component={Search} />

          <Route exact path="/login" component={LoginSignup} />

          <ProtectedRoute exact path="/account" component={Profile} />

          <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

          <ProtectedRoute
            exact
            path="/password/update"
            component={UpdatePassword}
          />
          <Route exact path="/password/forgot" component={ForgotPassword} />

          <Route
            exact
            path="/password/reset/:token"
            component={ResetPassword}
          />

          <Route exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/shipping" component={Shipping} />
          <ProtectedRoute
            exact
            path="/order/confirm"
            component={ConfirmOrder}
          />

          {stripeApiKey && (
            <Elements stripe={loadStripe(stripeApiKey)}>
              <ProtectedRoute
                exact
                path="/process/payment"
                component={Payment}
              />
            </Elements>
          )}

          <ProtectedRoute exact path="/success" component={OrderSuccess} />

          <ProtectedRoute exact path="/orders" component={MyOrder} />

          <ProtectedRoute
            exact
            path="/order/confirm"
            component={ConfirmOrder}
          />

          <ProtectedRoute exact path="/order/:id" component={OrderDetail} />

          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/dashboard"
            component={DashBoard}
          />

          <ProtectedRoute
            exact
            path="/admin/products"
            isAdmin={true}
            component={ProductList}
          />
          <ProtectedRoute
            exact
            path="/admin/product"
            isAdmin={true}
            component={NewProduct}
          />

          <ProtectedRoute
            exact
            path="/admin/product/:id"
            isAdmin={true}
            component={UpdateProduct}
          />

          <ProtectedRoute
            exact
            path="/admin/orders"
            isAdmin={true}
            component={OrderList}
          />

          <ProtectedRoute
            exact
            path="/admin/order/:id"
            isAdmin={true}
            component={ProcessOrder}
          />
          <ProtectedRoute
            exact
            path="/admin/users"
            isAdmin={true}
            component={UserList}
          />

          <ProtectedRoute
            exact
            path="/admin/user/:id"
            isAdmin={true}
            component={UpdateUser}
          />

          <ProtectedRoute
            exact
            path="/admin/reviews"
            isAdmin={true}
            component={ProductReview}
          />

          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
