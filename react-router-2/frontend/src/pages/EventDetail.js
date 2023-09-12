import { Await, defer, json, redirect, useLoaderData, useParams, useRouteError, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import { loadEvents } from "./Events";
import { Fragment, Suspense } from "react";
import EventsList from "../components/EventsList";

const EventDetail = (props) => {
  const data = useRouteLoaderData('event-detail');
  
  return <Fragment>
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={data.event}>
        {(event) => <EventItem event={event} />}
      </Await>
    </Suspense>
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
      <Await resolve={data.events}>
        {(events) => <EventsList events={events} />}
      </Await>
    </Suspense>
  </Fragment>  
};

export default EventDetail;

async function loadEvent(eventId) {
  const response = await fetch(`http://localhost:8080/events/${eventId}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data.event;
  }
}


export async function loader({ request, params }) {
  return defer({
    event: await loadEvent(params.eventId),
    events: loadEvents()
  })  
}

export async function action({ request, params }) {
    const eventId = params.eventId;
    const response = await fetch(`http://localhost:8080/events/${eventId}`, {
      method: request.method,
    });
  
    if (!response.ok) {
      throw json({ message: "Could not delete event." }, { status: 500 });
    }
  
    return redirect("/events");
  }
  
