import { Fragment } from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
    return <Fragment>
            <h2>This is the home page</h2>
            Go to <Link to="/products">products</Link> page
        </Fragment>
}

export default HomePage;