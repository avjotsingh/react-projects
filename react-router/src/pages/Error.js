import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";

const Error = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <h2>An error occurred</h2>
        <p>Could not find this page!</p>
      </main>
    </Fragment>
  );
};

export default Error;
