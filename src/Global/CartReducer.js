import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const CartReducer = (state, action) => {
  const { totalPrice, totalQty } = state;

  let product;
  let index;
  let updatedPrice;
  let updatedQty;

  switch (action.type) {
    case "ADD_TO_CART":
      let cart = JSON.parse(localStorage.getItem("cart"));

      // const check = shoppingCart.find(
      //   (product) => product.ProductID === action.id

      // );

      const check = cart.find((product) => product.ProductID === action.id);

      if (check) {
        toast.info("this product is already in your cart", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        product["TotalProductPrice"] = product.ProductPrice * product.qty;
        updatedQty = totalQty + 1;
        updatedPrice = totalPrice + product.ProductPrice;

        let cart = JSON.parse(localStorage.getItem("cart"));
        let _updatedPrice = JSON.parse(localStorage.getItem("totalPrice"));
        let _updatedQty = JSON.parse(localStorage.getItem("updatedQty"));

        localStorage.setItem("cart", JSON.stringify([...cart, product]));

        localStorage.setItem(
          "totalPrice",
          JSON.stringify(updatedPrice + _updatedPrice)
        );
        localStorage.setItem(
          "totalQty",
          JSON.stringify(updatedQty + _updatedQty)
        );
        return {
          shoppingCart: [...cart, product],
          totalPrice: updatedPrice,
          totalQty: updatedQty,
        };
      } // eslint-disable-next-line
      break;

    case "INC":
      product = action.cart;
      product.qty = ++product.qty;
      product.TotalProductPrice = product.qty * product.ProductPrice;
      updatedQty = totalQty + 1;
      updatedPrice = totalPrice + product.ProductPrice;

      // index = shoppingCart.findIndex((cart) => cart.ProductID === action.id);

      let __cart = JSON.parse(localStorage.getItem("cart"));
      index = __cart.findIndex((cart) => cart.ProductID === action.id);

      let _updatedPrice = JSON.parse(localStorage.getItem("totalPrice"));
      let _updatedQty = JSON.parse(localStorage.getItem("updatedQty"));

      __cart[index] = product;
      localStorage.setItem("cart", JSON.stringify([...__cart]));

      localStorage.setItem(
        "totalPrice",
        JSON.stringify(updatedPrice + _updatedPrice)
      );
      localStorage.setItem(
        "totalQty",
        JSON.stringify(updatedQty + _updatedQty)
      );

      return {
        shoppingCart: [...__cart],
        totalPrice: updatedPrice,
        totalQty: updatedQty,
      }; // eslint-disable-next-line
      break;

    case "DEC":
      product = action.cart;
      if (product.qty > 1) {
        product.qty = product.qty - 1;
        product.TotalProductPrice = product.qty * product.ProductPrice;
        updatedPrice = totalPrice - product.ProductPrice;
        updatedQty = totalQty - 1;
        // index = shoppingCart.findIndex((cart) => cart.ProductID === action.id);
        // shoppingCart[index] = product;

        let __cart = JSON.parse(localStorage.getItem("cart"));
        index = __cart.findIndex((cart) => cart.ProductID === action.id);

        let _updatedPrice = JSON.parse(localStorage.getItem("totalPrice"));
        let _updatedQty = JSON.parse(localStorage.getItem("totalQty"));

        __cart[index] = product;
        localStorage.setItem("cart", JSON.stringify([...__cart]));

        localStorage.setItem(
          "totalPrice",
          JSON.stringify(updatedPrice - _updatedPrice)
        );
        localStorage.setItem(
          "totalQty",
          JSON.stringify(updatedQty - _updatedQty)
        );

        return {
          shoppingCart: [...__cart],
          totalPrice: updatedPrice,
          totalQty: updatedQty,
        };
      } else {
        return state;
      } // eslint-disable-next-line
      break;

    case "DELETE":
      //   const filtered = shoppingCart.filter(
      //     (product) => product.ProductID !== action.id
      //   );
      product = action.cart;
      // updatedQty = totalQty - product.qty;
      // updatedPrice = totalPrice - product.qty * product.ProductPrice;

      const _cart = JSON.parse(localStorage.getItem("cart"));
      const filtered = _cart.filter(
        (product) => product.ProductID !== action.id
      );

      let __updatedPrice = JSON.parse(localStorage.getItem("totalPrice"));
      let __updatedQty = JSON.parse(localStorage.getItem("totalQty"));

      updatedQty = __updatedQty - product.qty;
      updatedPrice = __updatedPrice - product.qty * product.ProductPrice;

      localStorage.setItem("totalPrice", JSON.stringify(updatedPrice));
      localStorage.setItem("totalQty", JSON.stringify(updatedQty));
      localStorage.setItem("cart", JSON.stringify([...filtered]));
      // window.location.reload();
      return {
        shoppingCart: [...filtered],
        totalPrice: updatedPrice,
        totalQty: updatedQty,
      }; // eslint-disable-next-line
      break;

    case "EMPTY":
      localStorage.setItem("cart", JSON.stringify([]));
      localStorage.setItem("totalPrice", 0);
      localStorage.setItem("totalQty", 0);
      return {
        shoppingCart: [],
        totalPrice: 0,
        totalQty: 0,
      };

    default:
      return state;
  }
};
