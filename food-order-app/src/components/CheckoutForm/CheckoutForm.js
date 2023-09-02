import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./CheckoutForm.module.css";
import CartContext from "../../store/cart-context";
import useInput from "../../hooks/use-input";
import CheckoutContext from "../../store/checkout-context";
import { SCREENS } from "../../store/CheckoutProvider";

const ORDERS_URL = 'https://react-meals-10cb7-default-rtdb.firebaseio.com/orders.json'

const CheckoutForm = (props) => {
  const cartCtx = useContext(CartContext);
  const checkoutCtx = useContext(CheckoutContext);

  const isNotEmpty = (input) => input.trim().length !== 0;
  const hasNDigits = (n, input) => {
    try {
      Number(input.trim());
    } catch (err) {
      return false;
    }
    return input.trim().length === n;
  };

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(isNotEmpty);

  const {
    value: adddress,
    isValid: addressIsValid,
    hasError: addressHasError,
    changeHandler: addressChangeHandler,
    blurHandler: addressBlurHandler,
    reset: addressReset,
  } = useInput(isNotEmpty);

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput(isNotEmpty);

  const {
    value: pincode,
    isValid: pincodeIsValid,
    hasError: pincodeHasError,
    changeHandler: pincodeChangeHandler,
    blurHandler: pincodeBlurHandler,
    reset: pincodeReset,
  } = useInput(hasNDigits.bind(null, 6));

  const {
    value: mobile,
    isValid: mobileIsValid,
    hasError: mobileHasError,
    changeHandler: mobileChangeHandler,
    blurHandler: mobileBlurHandler,
    reset: mobileReset,
  } = useInput(hasNDigits.bind(null, 10));

  const formIsValid =
    nameIsValid &&
    addressIsValid &&
    cityIsValid &&
    pincodeIsValid &&
    mobileIsValid;

  const backClickHandler = (event) => {
    checkoutCtx.setScreen(SCREENS.SUMMARY);
  };

  const closeHandler = (event) => {
    cartCtx.hideCart();
    checkoutCtx.reset();
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    await fetch(ORDERS_URL, {
      method: 'POST',
      body: JSON.stringify({
        userData: {
          name,
          adddress,
          city,
          pincode,
          mobile
        },
        order: cartCtx.items
      })
    });
    
    nameReset();
    addressReset();
    cityReset();
    pincodeReset();
    mobileReset();
    console.log("displaying thank you screen");
    checkoutCtx.setScreen(SCREENS.THANK_YOU);
  };

  const nameClasses = nameHasError
    ? `${classes.formInput} ${classes.invalid}`
    : `${classes.formInput}`;
  const addressClasses = addressHasError
    ? `${classes.formInput} ${classes.invalid}`
    : `${classes.formInput}`;
  const cityClasses = cityHasError
    ? `${classes.formInput} ${classes.invalid}`
    : `${classes.formInput}`;
  const pincodeClasses = pincodeHasError
    ? `${classes.formInput} ${classes.invalid}`
    : `${classes.formInput}`;
  const mobileClasses = mobileHasError
    ? `${classes.formInput} ${classes.invalid}`
    : `${classes.formInput}`;

  return (
    <Modal onClose={closeHandler}>
      <form className={classes.checkoutForm} onSubmit={submitHandler}>
        <div className={classes.formGrid}>
          <div className={nameClasses}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && (
              <p className={classes.errorText}>Please enter a name</p>
            )}
          </div>
          <div className={addressClasses}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={adddress}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
            />
            {addressHasError && (
              <p className={classes.errorText}>Please enter a valid address</p>
            )}
          </div>
          <div className={cityClasses}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
            />
            {cityHasError && (
              <p className={classes.errorText}>Please enter a valid city</p>
            )}
          </div>
          <div className={pincodeClasses}>
            <label htmlFor="pincode">Pin Code</label>
            <input
              type="text"
              id="pincode"
              value={pincode}
              onChange={pincodeChangeHandler}
              onBlur={pincodeBlurHandler}
            />
            {pincodeHasError && (
              <p className={classes.errorText}>
                Please enter a 5 digit Pin Code
              </p>
            )}
          </div>
          <div className={mobileClasses}>
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={mobileChangeHandler}
              onBlur={mobileBlurHandler}
            />
            {mobileHasError && (
              <p className={classes.errorText}>
                Please enter a 10 digit number
              </p>
            )}
          </div>
        </div>
        <div className={classes.cartActions}>
          <button
            className={classes["button--alt"]}
            onClick={backClickHandler}
          >
            Back
          </button>
          <button
            className={classes.button}
            type="submit"
            disabled={!formIsValid}
          >
            Confirm
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CheckoutForm;
