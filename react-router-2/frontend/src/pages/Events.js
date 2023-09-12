import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const Events = (props) => {
  const data = useLoaderData();
  const events = data.events;

  return <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
    <Await resolve={events}>
      {(loadedEvents) => <EventsList events={loadedEvents} />}      
    </Await>
  </Suspense>
};

export default Events;

export async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const data = await response.json();
    return data.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents()
  })
}
