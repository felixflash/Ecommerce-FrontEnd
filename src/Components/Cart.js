import React, { useContext, useEffect } from "react";
import { CartContext } from "../Global/CartContext";
import { Navbar } from "./Navbar";
import { Icon } from "react-icons-kit";
import { ic_add } from "react-icons-kit/md/ic_add";
import { ic_remove } from "react-icons-kit/md/ic_remove";
import { iosTrashOutline } from "react-icons-kit/ionicons/iosTrashOutline";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth } from "../Config/Config";

export const Cart = ({ user }) => {
  const { dispatch, totalPrice, totalQty } = useContext(CartContext);

  const shoppingCart = JSON.parse(localStorage.getItem("cart"));
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/login");
      }
    });
  });

  return (
    <>
      <Navbar user={user} />

      <>
      <section id="cartlistcontainer">
      <div className="cartlistbgimg">
        <img
          src="https://iammagnus.com/wp-content/uploads/2016/05/website-design-background-1.jpg"
          alt="bacgroundimage"
        />
      </div>
        <div className="cart-container bg-white text-light">
          {shoppingCart.length === 0 && (
            <>
              <div>
                no items in your cart or slow internet causing trouble (Refresh
                the page) or you are not logged in
              </div>
              <div>
                <Link to="/">Return to Home page</Link>
              </div>
            </>
          )}
          {shoppingCart &&
            shoppingCart.map((cart) => (
              <div className="cart-card bg-danger" key={cart.ProductID}>
                <div className="cart-img">
                  <img src={cart.ProductImg} alt="not found" />
                </div>

                <div className="cart-name">{cart.ProductName}</div>

                <div className="cart-price-orignal text-light">
                  GH₵ {cart.ProductPrice}.00
                </div>

                <div
                  className="inc text-warning"
                  onClick={() =>
                    dispatch({ type: "INC", id: cart.ProductID, cart })
                  }
                >
                  <Icon icon={ic_add} size={24} />
                </div>

                <div className="quantity">{cart.qty}</div>

                <div
                  className="dec text-warning"
                  onClick={() =>
                    dispatch({ type: "DEC", id: cart.ProductID, cart })
                  }
                >
                  <Icon icon={ic_remove} size={24} />
                </div>

                <div className="cart-price text-light">
                  GH₵ {cart.TotalProductPrice}.00
                </div>

                <button
                  className="delete-btn text-light"
                  onClick={() =>
                    dispatch({ type: "DELETE", id: cart.ProductID, cart })
                  }
                >
                  <Icon icon={iosTrashOutline} size={24} />
                </button>
              </div>
            ))}
          {(shoppingCart.length || 0) > 0 && (
            <div className="cart-summary bg-dark text-light border-darken-1">
              <div className="cart-summary-heading">Cart-Summary</div>
              <div className="cart-summary-price">
                <span>Total Price</span>
                <span>{totalPrice}</span>
              </div>
              <div className="cart-summary-price">
                <span>Total Qty</span>
                <span>{totalQty}</span>
              </div>
              <Link to="cashout" className="cashout-link">
                <h4>
                  <button
                    className="badge text-light btn-lg badge-secondary badge-pill"
                    style={{ marginTop: 5 + "px" }}
                  >
                    Cash on delivery
                  </button>
                </h4>
              </Link>
            </div>
          )}
        </div>
        </section>
      </>
    </>
  );
};
