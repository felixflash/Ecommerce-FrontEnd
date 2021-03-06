import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Config/Config";
import { Icon } from "react-icons-kit";
import { cart } from "react-icons-kit/entypo/cart";
import { useHistory } from "react-router-dom";

export const Navbar = ({ user }) => {
  const history = useHistory();
  // const { totalQty } = useContext(CartContext);
  const totalQty = JSON.parse(localStorage.getItem("cart"));

  // handle logout
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <div className="p-3 bg-dark text-white">
      <div className="container ">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img
              className="imgclass "
              src="https://image.flaticon.com/icons/png/512/4290/4290854.png"
              alt=""
              width="50"
              height="50"
            />
          </a>

          {/* Code below for position of various items on the navbar */}

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <div className="text-position1">
              <li>
                <a href="/" className="nav-link px-2  active">
                  I-Sell
                </a>
              </li>
            </div>

            <div className="text-position2">
              <li>
                <Link to="addproducts">
                  <button className="btn btn-primary btn-md position-relative">
                    Add Products
                  </button>
                </Link>
              </li>
            </div>
          </ul>

          <div className="p-3 bg-dark text-white">
            <div className=" nav  container ">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <div className="rightside-logout">
                  <button
                    type="button"
                    class="btn btn-outline-light me-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>

                <div className="rightside-user">
                  <button
                    type="button"
                    class="btn btn-primary btn-md position-relative"
                  >
                    {user}
                    <span class="position-absolute top-1 right-30 start-100 translate-middle p-2 bg-danger border border-danger rounded-circle"></span>
                  </button>
                </div>

                <div className="rightside-carticon">
                  <a href="cartproducts" className="nav-link px-2 text-white">
                    <Icon icon={cart} />
                  </a>
                </div>
                <div className="rightside-cartvalue ">
                  <div className="cartvalue">
                    <span className="no-of-products">{totalQty.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
