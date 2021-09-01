/* eslint-disable no-undef */
import React, { useState, useEffect, useContext } from "react";
import { auth, db } from "../Config/Config";
import { CartContext } from "../Global/CartContext";
import { Navbar } from "./Navbar";
import { BNBAbi } from "../Config/BNBAbi";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SimplePopover from "./Popup";

export const Cashout = (props) => {
  const history = useHistory();
  // eslint-disable-next-line
  const { dispatch } = useContext(CartContext);

  // defining state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [btnText, setBtnText] = useState("");

  const shoppingCart = JSON.parse(localStorage.getItem("cart"));
  const totalQty = parseInt(localStorage.getItem("totalQty"));
  const totalPrice = parseInt(localStorage.getItem("totalPrice"));
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("SignedUpUsersData")
          .doc(user.uid)
          .onSnapshot((snapshot) => {
            setName(snapshot.data().Name);
            setEmail(snapshot.data().Email);
          });
      } else {
        history.push("/login");
      }
    });
  });

  const cashoutSubmit = (e) => {
    checkoutPayment();
    e.preventDefault();
    auth.onAuthStateChanged((user) => {
      if (user) {
        const date = new Date();
        const time = date.getTime();
        db.collection("Buyer-info " + user.uid)
          .doc("_" + time)
          .set({
            BuyerName: name,
            BuyerEmail: email,
            BuyerCell: cell,
            BuyerAddress: address,
            BuyerPayment: totalPrice,
            BuyerQuantity: totalQty,
          })
          .then(() => {
            setCell("");
            setAddress("");
            dispatch({ type: "EMPTY" });
            setSuccessMsg(
              "Your order has been placed successfully. Thanks for shopping at I-sell. You will be redirected to home page after 5 seconds"
            );
            setTimeout(() => {
              history.push("/");
            }, 5000);
          })
          .catch((err) => setError(err.message));
      }
    });
  };

  React.useEffect(() => {
    successMsg !== "" &&
      toast.info(successMsg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
  }, [successMsg]);

  React.useEffect(() => {
    error !== "" &&
      toast.error(error, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
  }, [error]);

  let defaultAccount, provider, signer, chainId, BNBContract;
  const BNBAddress = "0x9674c8fae3687e9689e7ba6dc4bd27f937a8ed31"; //Deployed BNB Contract Address
  const vendor = "0xA5771debcAD3Af421712c8e2072a41eAc1BF9282"; //Vendors Address

  window.ethereum.addListener("connect", async (response) => {
    chainId = parseInt(response.chainId);

    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    BNBContract = new ethers.Contract(BNBAddress, BNBAbi, signer);

    //Fetch default account
    provider.listAccounts().then((accounts) => {
      defaultAccount = accounts[0];

      if (defaultAccount) setBtnText("MetaMask Connected");
    });
  });

  const connectMetaMask = async () => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((response) => {
        alert("Wallet connected successfully!");
        window.location.reload();
      })
      .then(() => setBtnText("MetaMask Connected"))
      .catch((error) => {
        alert("An error occurred, kindly check the console for details");
        console.log(error);
      });
  };

  const checkoutPayment = () => {
    let amount = ethers.utils.parseEther("0.5");

    BNBContract.transfer(vendor, amount)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    return false;
  };

  window.ethereum.on("accountsChanged", () => {
    window.location.reload();
  });

  window.ethereum.on("chainChanged", () => {
    window.location.reload();
  });

  window.ethereum.on("disconnect", () => {
    window.location.reload();
  });

  function handleWalletConnection() {
    connectMetaMask();
  }

  return (
    <>
      <SimplePopover /> {/* Dispute Section */}
      <div className="container">
        <main>
          <div className="py-5 text-center">
            <h2>Checkout Form</h2>
          </div>

          <div className="row g-3">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge bg-primary rounded-pill">
                  {totalQty}
                </span>
              </h4>
              <ul className="list-group mb-3">
                {shoppingCart.map((item) => (
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">{item.ProductName}</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">
                      GHS {item.TotalProductPrice.toFixed(2)}
                    </span>
                  </li>
                ))}

                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (GHS)</span>
                  <strong>{totalPrice.toFixed(2)} </strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (BNB)</span>
                  <strong>0.5 BNB</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Billing address</h4>
              <form
                className="needs-validation"
                id="checkout"
                onSubmit={cashoutSubmit}
              >
                <div className="row g-3">
                  <div className="col-12">
                    <label for="firstName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={name}
                      disabled
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label for="email" className="form-label">
                      Email <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      disabled
                    />
                  </div>

                  <div className="col-12">
                    <label for="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="col-12">
                    <label for="address" className="form-label">
                      Phone No.
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      onChange={(e) => setCell(e.target.value)}
                      value={cell}
                      placeholder="eg 03123456789"
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <h4 className="mb-3 d-inline-block">Payment</h4>
                <small
                  className={
                    btnText === "MetaMask Connected"
                      ? "text-success"
                      : "text-danger connect pointer"
                  }
                  onClick={handleWalletConnection}
                >
                  {!!btnText ? btnTe : "  ⚠ Connect Wallet"}
                </small>

                <div className="my-3">
                  <div className="form-check">
                    <input
                      id="graph"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" for="graph">
                      Graph Token
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="compound"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" for="compound">
                      Compound Token
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="binance"
                      checked
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" for="binance">
                      Binance Token
                    </label>
                  </div>
                </div>

                <hr className="my-4" />

                <button className="w-100 btn btn-primary btn-lg" type="submit">
                  Checkout
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
