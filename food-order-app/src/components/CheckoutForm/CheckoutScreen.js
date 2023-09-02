import { Fragment, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import ThankYou from "./ThankYou";

const CheckoutScreen = props => {
    const [showThankYouScreen, setShowThankYouScreen] = useState(false);
    const confirmHandler = () => {
        setShowThankYouScreen(true);
    }

    return <Fragment>
        {!showThankYouScreen && <CheckoutForm onConfirm={confirmHandler} />}
        {showThankYouScreen && <ThankYou />}
    </Fragment>
}

export default CheckoutScreen;