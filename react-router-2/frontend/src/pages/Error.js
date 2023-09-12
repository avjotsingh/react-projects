import { Fragment } from "react";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

const Error = (props) => {
  let title = "An error occurred!";
  let message = "Something went wrong!";

  const error = useRouteError();
  if (error.status === 500) {
    message = error.data.message;
  } else if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <Fragment>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
};

export default Error;
