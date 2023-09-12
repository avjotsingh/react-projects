import { Fragment } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
    const params = useParams();

    return <Fragment>
        <h2>Product Details!</h2>
        <p>{params.productId}</p>
    </Fragment>
}

export default ProductDetails;