import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";

const Root = (props) => {
    const navigation = useNavigation();


    return <Fragment>
        <MainNavigation />
        { navigation.state === 'loading' && <p>Loading...</p> }
        <Outlet />
    </Fragment>
}

export default Root;