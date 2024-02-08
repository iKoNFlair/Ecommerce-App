import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import { AiFillWarning } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/CartStyles.css";
import Item from "./user/Cart/Cart";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get(
        "https://ecommerce-app-02j2.onrender.com/api/v1/product/braintree/token"
      );
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post(
        "https://ecommerce-app-02j2.onrender.com/api/v1/product/braintree/payment",
        {
          nonce,
          cart,
        }
      );
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Layout title={"My Cart"}>
      {cart.length ? (
        <div className="cart-page">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center p-2 mb-1">
                {/* {!auth?.user
                ? "Hello Guest"
                : `Hello  ${auth?.token && auth?.user?.name}`} */}
                <p className="text-center">
                  {`You have ${cart.length} ${
                    cart.length === 1 ? "item" : "items"
                  } in your cart ${
                    auth?.token ? "" : "please login to checkout !"
                  }`}
                </p>
              </h1>
            </div>
          </div>
          <div className="container ">
            <div className="row ">
              <div className="col-md-7 p-0">
                {cart?.map((p, i) => (
                  <Item
                    key={i}
                    id={p._id}
                    name={p.name}
                    description={p.description}
                    productImage={`https://ecommerce-app-02j2.onrender.com/api/v1/product/product-photo/${p._id}`}
                    price={p.price}
                    remove={removeCartItem}
                  />
                ))}
              </div>
              <div className="col-md-5 cart-summary ">
                <h3>Cart Summary</h3>
                {/* <p>Total | Checkout | Payment</p> */}
                <hr />
                <h4 className="total">Total : {totalPrice()} </h4>
                {auth?.user?.address ? (
                  <>
                    <div className="mb-3 address">
                      <p>
                        Delivery to:{" "}
                        <span style={{ fontWeight: "800" }}>
                          {auth?.user?.address}
                        </span>{" "}
                      </p>

                      <button
                        className="btn btn-outline-primary w-25"
                        onClick={() => navigate("/dashboard/user/profile")}
                      >
                        Change
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="mb-3">
                    {auth?.token ? (
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => navigate("/dashboard/user/profile")}
                      >
                        Update Address
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-warning"
                        onClick={() =>
                          navigate("/login", {
                            state: "/cart",
                          })
                        }
                      >
                        Please Login to checkout
                      </button>
                    )}
                  </div>
                )}
                <div className="mt-2">
                  {!clientToken || !auth?.token || !cart?.length ? (
                    ""
                  ) : (
                    <>
                      <DropIn
                        options={{
                          authorization: clientToken,
                          paypal: {
                            flow: "vault",
                          },
                        }}
                        onInstance={(instance) => setInstance(instance)}
                      />

                      <button
                        className="btn btn-primary"
                        onClick={handlePayment}
                        disabled={loading || !instance || !auth?.user?.address}
                      >
                        {loading ? "Processing ...." : "Make Payment"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty">
          <img className="cartImg" src="./images/cart.png" alt="" />
          <h5 className="cartEmpty">Your cart is empty!</h5>
        </div>
      )}
    </Layout>
  );
};

export default CartPage;
