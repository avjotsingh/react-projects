import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-meals-10cb7-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const { items, totalQuantity } = await sendRequest();
      dispatch(
        cartActions.replaceCart({
          items: items || [],
          totalQuantity: totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Failed to fetch cart data",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data",
      })
    );

    console.log('cart data', cart);

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-meals-10cb7-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed...");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Failed to send cart data",
        })
      );
    }
  };
};
