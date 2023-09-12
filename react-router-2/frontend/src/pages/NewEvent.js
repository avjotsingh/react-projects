import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEvent = (props) => {
  return <EventForm method='post' />;
};

export default NewEvent;
